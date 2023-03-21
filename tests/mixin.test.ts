import execa = require('execa')
import { describe, expect, it } from 'vitest'

import { createPromiseMixin } from '../src/mixin'

const originalPromise = new Promise<boolean>((resolve) => {
  setTimeout(() => {
    resolve(true)
  }, 1)
})

const objectMixin = {
  foo: 'bar',
}

it('must return a passed promise with the object properties mixed in', () => {
  const promise = createPromiseMixin(originalPromise, objectMixin)
  expect(promise.foo).toBe('bar')
})

it('must return the proxied promise', async () => {
  const promise = createPromiseMixin(originalPromise, objectMixin)
  await expect(promise).resolves.toBe(true)
})

it('must preserve the mixin when calling then() on a promise', () => {
  const promise = createPromiseMixin(originalPromise, objectMixin)
  // eslint-disable-next-line promise/valid-params
  expect(promise.then().foo).toBe('bar')
})

describe('execa', () => {
  it('must preserve all prototype chain and its methods', () => {
    const object = execa('ls')
    const promise = object.then()
    const mi = createPromiseMixin(promise, object)
    expect(mi.killed).toBe(false)
  })
})
