<h1 align="center">
    <img alt="linkertinker" src="./.github/logo.svg" width="100" /><br>
  promise-mixin
</h1>

<h6 align="center">
A handy and fast promise helper that 
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
