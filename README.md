# Bundles Tplit Bundler

<!-- Shields. -->
<p>
    <!-- NPM version. -->
    <a href="https://www.npmjs.com/package/@bundles/bundles-tplit"><img alt="NPM version" src="https://img.shields.io/npm/v/@bundles/bundles-tplit.svg?style=flat-square"></a>
    <!-- NPM downloads/month. -->
    <a href="https://www.npmjs.com/package/@bundles/bundles-tplit"><img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@bundles/bundles-tplit.svg?style=flat-square"></a>
    <!-- Travis branch. -->
    <a href="https://github.com/brikcss/bundles-tplit/tree/master"><img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master"></a>
    <!-- Codacy. -->
    <a href="https://www.codacy.com"><img alt="Codacy code quality" src="https://img.shields.io/codacy/grade/eea4417c437a45b9a07ee254c41c309d/master.svg?style=flat-square"></a>
    <a href="https://www.codacy.com"><img alt="Codacy code coverage" src="https://img.shields.io/codacy/coverage/eea4417c437a45b9a07ee254c41c309d/master.svg?style=flat-square"></a>
    <!-- Coveralls -->
    <a href='https://coveralls.io/github/brikcss/bundles-tplit?branch=master'><img src='https://img.shields.io/coveralls/github/brikcss/bundles-tplit/master.svg?style=flat-square' alt='Coverage Status' /></a>
    <!-- JS Standard style. -->
    <a href="https://standardjs.com"><img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square"></a>
    <!-- Prettier code style. -->
    <a href="https://prettier.io/"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
    <!-- Semantic release. -->
    <a href="https://github.com/semantic-release/semantic-release"><img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square"></a>
    <!-- Commitizen friendly. -->
    <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square"></a>
    <!-- MIT License. -->
    <a href="https://choosealicense.com/licenses/mit/"><img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square"></a>
    <!-- Greenkeeper. -->
    <a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/brikcss/bundles-tplit.svg?style=flat-square" alt="Greenkeeper badge"></a>
</p>

This is a bundler plugin for [Bundles](https://github.com/brikcss/bundles-core). It uses [tplit](https://github.com/brikcss/tplit) to compile Bundles input with the power of native JavaScript templating with template literals.

## Environment support

| Node | CLI | ES Module | Browser | UMD |
| :--: | :-: | :-------: | :-----: | :-: |
|  ✓   |  ✓  |     x     |    x    |  x  |

## Install

```sh
npm install @bundles/core @bundles/bundles-tplit -D
```

## Usage

See [configuring Bundles](https://github.com/brikcss/bundles-core#configuration) for how to configure Bundles and bundlers.

### Configuration

The following configuration options are available:

- **`options`** _{Object}_ Options passed to [tplit](https://github.com/brikcss/tplit).

### Data

The tplit bundler utilizes [the `file.data` property](https://github.com/brikcss/bundles-core#the-file-object) to compile your tplit files with data.
