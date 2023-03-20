<h1 align="center">
    <img alt="linkertinker" src="https://user-images.githubusercontent.com/7554214/153162406-bf8fd16f-aa98-4604-b87b-e13ab4baf604.png" width="100" /><br>
  promise-supplement
</h1>

<h6 align="center">
Additonal promise-based helpers that let you handle some of the less common problems
</h6>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Medusa is released under the MIT license." />
  </a>
  <a href="https://circleci.com/gh/medusajs/medusa">
    <img src="https://circleci.com/gh/medusajs/medusa.svg?style=shield" alt="Current CircleCI build status." />
  </a>
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
    <a href="https://www.producthunt.com/posts/medusa"><img src="https://img.shields.io/badge/Product%20Hunt-%231%20Product%20of%20the%20Day-%23DA552E" alt="Product Hunt"></a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

## Quickstart

Install the package globally:

```bash
npx install linker-tinker
```

Run this comand from a directory:

```bash
lt sync ../my-dependency
```

## Installation

The **recommended** way to install the latest version of Astro is by running the command below:

```bash
npm create astro@latest
```

You can also install Astro **manually** by running this command instead:

```bash
npm install --save-dev astro
```

## Usage

```bash
$ ncc <cmd> <opts>
```

Eg:

```bash
$ ncc build input.js -o dist
```

If building an `.mjs` or `.js` module inside a `"type": "module"` [package boundary](https://nodejs.org/dist/latest-v16.x/docs/api/packages.html#packages_package_json_and_file_extensions), an ES module output will be created automatically.

Outputs the Node.js compact build of `input.js` into `dist/index.js`.

> Note: If the input file is using a `.cjs` extension, then so will the corresponding output file.
> This is useful for packages that want to use `.js` files as modules in native Node.js using
> a `"type": "module"` in the package.json file.

#### Commands:

```
  build <input-file> [opts]
  run <input-file> [opts]
  cache clean|dir|size
  help
  version
```

#### Options:

```
  -o, --out [dir]          Output directory for build (defaults to dist)
  -m, --minify             Minify output
  -C, --no-cache           Skip build cache population
  -s, --source-map         Generate source map
  -a, --asset-builds       Build nested JS assets recursively, useful for
                           when code is loaded as an asset eg for workers.
  --no-source-map-register Skip source-map-register source map support
  -e, --external [mod]     Skip bundling 'mod'. Can be used many times
  -q, --quiet              Disable build summaries / non-error outputs
  -w, --watch              Start a watched build
  -t, --transpile-only     Use transpileOnly option with the ts-loader
  --v8-cache               Emit a build using the v8 compile cache
  --license [file]         Adds a file containing licensing information to the output
  --stats-out [file]       Emit webpack stats as json to the specified output file
  --target [es]            ECMAScript target to use for output (default: es2015)
                           Learn more: https://webpack.js.org/configuration/target
  -d, --debug              Show debug logs
```

### Execution Testing

For testing and debugging, a file can be built into a temporary directory and executed with full source maps support with the command:

```bash
$ ncc run input.js
```

# Motivation

This is yet another replacement for the `npm link`, which has tons of issues and works only for trivial cases. This is
also a replacement for other replacement packages which are either not maintained or a very clunky to use.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/link-and-tink.svg)](https://npmjs.org/package/link-and-tink)
[![Downloads/week](https://img.shields.io/npm/dw/link-and-tink.svg)](https://npmjs.org/package/link-and-tink)
[![License](https://img.shields.io/npm/l/link-and-tink.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

# Features

- Survives npm install
- All production dependencies and peer dependencies are installed along the main package (unlike npm link)
- Automatic reinstall of the changed dependencies
- No transitive dependencies
- Works with CRA, Vite, etc. hot reloading / hot module replacement (HMR)
- Fully automatic syncronisation between your project and linked dependency
- No 3rd-party config options in your package.json
- Out of the box support for TypeScript transpiler and other watchers
- Bidirectional sync

# Usage

# To Do

- Support other than NPM package managers

# Recipes

#Comparison table

https://docs.npmjs.com/cli/v9/commands/npm-link
https://github.com/wclr/yalc
https://github.com/privatenumber/link
https://hirok.io/posts/avoid-npm-link
