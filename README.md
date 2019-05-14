# decoji

## 𝐃𝐞𝐜𝐨𝐣𝐢

## 𝐷𝑒𝑐𝑜𝑗𝑖

## 𝑫𝒆𝒄𝒐𝒋𝒊

## 𝒟e𝒸o𝒿𝒾

## 𝓓𝓮𝓬𝓸𝓳𝓲

## 𝔇𝔢𝔠𝔬𝔧𝔦

## 𝔻𝕖𝕔𝕠𝕛𝕚

## 𝕯𝖊𝖈𝖔𝖏𝖎

## 𝖣𝖾𝖼𝗈𝗃𝗂

## 𝗗𝗲𝗰𝗼𝗷𝗶

## 𝘋𝘦𝘤𝘰𝘫𝘪

## 𝘿𝙚𝙘𝙤𝙟𝙞

## 𝙳𝚎𝚌𝚘𝚓𝚒

## Ⓓⓔⓒⓞⓙⓘ

## 🄓⒠⒞⒪⒥⒤

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
