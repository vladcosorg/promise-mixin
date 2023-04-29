<h1 align="center">
    <img alt="linkertinker" src="./.github/logo.svg" width="100" /><br>
  promise-mixin
</h1>

<h6 align="center">
A handy and flexible helper that lets you augment the promise object in a safe and reliable way
</h6>
<p align="center">
    <img src="https://img.shields.io/github/checks-status/chetzof/promise-mixin/master" alt="Medusa is released under the MIT license." />
    <img src="https://img.shields.io/github/checks-status/chetzof/promise-mixin/master" alt="Medusa is released under the MIT license." />
    <img src="https://img.shields.io/github/checks-status/chetzof/promise-mixin/master" alt="Medusa is released under the MIT license." />
    <img src="https://img.shields.io/github/checks-status/chetzof/promise-mixin/master" alt="Medusa is released under the MIT license." />
    <img src="https://img.shields.io/github/checks-status/chetzof/promise-mixin/master" alt="Medusa is released under the MIT license." />
</p>

## Installation

```bash
npm i promise-mixin
```

## Usage

Note that the following use-case is simplified and regular `class ExtendedPromise extends Promise` is recommended instead.

```typescript
import { createPromiseMixin } from 'promise-mixin'
const typicalPromise = new Promise((resolve) => resolve(true))
const externalPromise = createPromiseMixin(typicalPromise, {
  killed: () => true,
})

console.log(externalPromise.killed()) // outputs true
```

# Motivation

This package was created to solve the cases when you need support for
ad-hoc extension of javascript objects and/or you don't have control
over the resulting promise object.
For example when the resulting promise is returned from a library.

In all other cases I recommend using the tranditional inherintance via the `extends` keyword.

# Use-cases

###### Case 1: Fixing an augmented promise from an external library

Problem:

```typescript
const childProcessPromise = execa('ls') // Returns augmented Promise object
console.log(childProcessPromise)

/*
ChildProcess {
  connected: false,
  signalCode: null,
  exitCode: null,
  killed: false,
 ...
  // note that it also got native Promise prototype methods
  then: [Function],
  catch: [Function],
  finally: [Function],
}
*/
const newChildPromise = childProcessPromise.then((result) => undefined) // do something
console.log(newChildPromise) // all the augmented methods connected, signalCode, etc. are lost
/*
Promise {
  then: [Function],
  catch: [Function],
  finally: [Function],
}
*/
```

Solution:

```typescript
import { createPromiseMixin } from 'promise-mixin'
const childProcessPromise = execa('ls')
const properMixinPromise = createPromiseMixin(
  childProcessPromise.then(),
  object,
) // fixing the protype chain

const newChildPromise = childProcessPromise.then((result) => undefined) // do something and return new promise
console.log(newChildPromise) // all the augmented methods connected, signalCode, etc. are preserved
/*
ChildProcess {
  connected: false,
  signalCode: null,
  exitCode: null,
  killed: false,
 ...
  then: [Function],
  catch: [Function],
  finally: [Function],
}
*/
```

###### Case 2: Adding an ad-hoc method or property onto a promise object (and preserving it )

```typescript
import { createPromiseMixin } from 'promise-mixin'
const typicalPromise = promiseFromAnExternalLibrary() //
const externalPromise = createPromiseMixin(typicalPromise, {
  onAbortListener: (listener: () => void) => undefined, // logic,
})

externalPromise.onAbortListener(() => showNotification())

// promise chaining works as well

externalPromise
  .then()
  /*a new promise is created, the mixin methods are still there */
  .onAbortListener(() => showNotification())
externalPromise
  .catch()
  /*a new promise is created, the mixin methods are still there*/
  .onAbortListener(() => showNotification())
externalPromise
  .finally()
  /*a new promise is created, the mixin methods are still there*/
  .onAbortListener(() => showNotification())
```

###### Case 3: Adding the abort method right on the promise object

```typescript
function runFetch(): Promise<string> & { abort: () => void } {
  const controller = new AbortController()
  const signal = controller.signal
  return createPromiseMixin(
    fetch(url, { signal })
      .then((response) => {
        console.log('Download complete', response)
      })
      .catch((err) => {
        console.error(`Download error: ${err.message}`)
      }),
    { abort: () => controller.abort() },
  )
}

const fetchPromise = runFetch()

eventManager.on('immediate-exit', () => fetchPromise.abort())

await fetchPromise
```

# Warning: Do not use ASYNC when returning the augmented promise

Right:

```typescript
function runFetch() {
  return createPromiseMixin(
    ...
  )
}

console.log(runFetch()) // Promise<string> & { abort: () => void }
```

Wrong:

```typescript
async function runFetch() {
  return createPromiseMixin(
    ...
  )
}

console.log(runFetch()) // Promise<string>
```

When using async, the the augmented Promises will be wrapped with the regular Promise object.
