# decoji

Transform your alphanumeric string with Unicode supplemental characters.

[![Version](https://img.shields.io/npm/v/decoji.svg)](https://npmjs.org/package/decoji)
[![Codecov](https://codecov.io/gh/y13i/decoji/branch/master/graph/badge.svg)](https://codecov.io/gh/y13i/decoji)
[![License](https://img.shields.io/npm/l/decoji.svg)](https://github.com/y13i/decoji/blob/master/package.json)

## CLI

```
Usage: decoji [options] [string]

Options:
  -V, --version        output the version number
  -s, --style <style>  transform style name (default: selected at random)
  -l, --list           list all styles
  -m, --mapping        show mapping for given style
  -h, --help           output usage information
```

```sh
decoji "Lorem ipsum dolor sit amet, ..."
```

```sh
decoji --style mathematical-bold-script "Lorem ipsum dolor sit amet, ..."
```

```sh
decoji --list "Lorem ipsum..."
```

```sh
decoji --mapping --style circled
```

## API

```js
import { decoji } from "decoji";

console.log(decoji("Lorem ipsum...", "mathematical-bold-fraktur"));
```
