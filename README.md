# Decoji

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
$ decoji "Lorem ipsum dolor sit amet,"
𝐋𝐨𝐫𝐞𝐦 𝐢𝐩𝐬𝐮𝐦 𝐝𝐨𝐥𝐨𝐫 𝐬𝐢𝐭 𝐚𝐦𝐞𝐭,
```

```sh
$ decoji --style mathematical-bold-script "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
𝓬𝓸𝓷𝓼𝓮𝓬𝓽𝓮𝓽𝓾𝓻 𝓪𝓭𝓲𝓹𝓲𝓼𝓬𝓲𝓷𝓰 𝓮𝓵𝓲𝓽, 𝓼𝓮𝓭 𝓭𝓸 𝓮𝓲𝓾𝓼𝓶𝓸𝓭 𝓽𝓮𝓶𝓹𝓸𝓻 𝓲𝓷𝓬𝓲𝓭𝓲𝓭𝓾𝓷𝓽 𝓾𝓽 𝓵𝓪𝓫𝓸𝓻𝓮 𝓮𝓽 𝓭𝓸𝓵𝓸𝓻𝓮 𝓶𝓪𝓰𝓷𝓪 𝓪𝓵𝓲𝓺𝓾𝓪.
```

```sh
$ decoji --list | head -n 5
{
  "mathematical-bold": "𝐓𝐡𝐞 𝐪𝐮𝐢𝐜𝐤 𝐛𝐫𝐨𝐰𝐧 𝐟𝐨𝐱 𝐣𝐮𝐦𝐩𝐬 𝐨𝐯𝐞𝐫 𝐭𝐡𝐞 𝐥𝐚𝐳𝐲 𝐝𝐨𝐠. 𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎",
  "mathematical-italic": "𝑇h𝑒 𝑞𝑢𝑖𝑐𝑘 𝑏𝑟𝑜𝑤𝑛 𝑓𝑜𝑥 𝑗𝑢𝑚𝑝𝑠 𝑜𝑣𝑒𝑟 𝑡h𝑒 𝑙𝑎𝑧𝑦 𝑑𝑜𝑔. 1234567890",
  "mathematical-bold-italic": "𝑻𝒉𝒆 𝒒𝒖𝒊𝒄𝒌 𝒃𝒓𝒐𝒘𝒏 𝒇𝒐𝒙 𝒋𝒖𝒎𝒑𝒔 𝒐𝒗𝒆𝒓 𝒕𝒉𝒆 𝒍𝒂𝒛𝒚 𝒅𝒐𝒈. 1234567890",
  "mathematical-script": "𝒯𝒽e 𝓆𝓊𝒾𝒸𝓀 𝒷𝓇o𝓌𝓃 𝒻o𝓍 𝒿𝓊𝓂𝓅𝓈 o𝓋e𝓇 𝓉𝒽e 𝓁𝒶𝓏𝓎 𝒹og. 1234567890",
```

```sh
$ decoji --mapping --style circled | head -n 5
{
  "0": "⓪",
  "1": "①",
  "2": "②",
  "3": "③",
```

## API

```js
import { decorate, styleNames } from "decoji";

// styleNames; // => ["mathematical-bold", "mathematical-italic", ...]
console.log(decorate("Lorem ipsum...", "mathematical-bold-fraktur"));
```
