#!/usr/bin/env node
/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint no-console: 0 */

const { Command } = require("commander");
const packageMetadata = require("../package.json");
const decoji = require("../dist/cjs");

const command = new Command();

command
  .name(packageMetadata.name)
  .usage("[options] [string]")
  .description(packageMetadata.description)
  .version(packageMetadata.version)
  .option(
    "-s, --style <style>",
    "transform style name (default: selected at random)"
  )
  .option("-l, --list", "list all styles")
  .option("-m, --mapping", "show mapping for given style")
  .action(() => {
    const input =
      command.args[0] ||
      "The quick brown fox jumps over the lazy dog. 1234567890";

    if (command.list) {
      decoji.styles.forEach(style => {
        console.log(`${style.name}: ${decoji.decorate(input, style.name)}`);
      });
    } else {
      const styleName =
        command.style ||
        decoji.styles[Math.floor(Math.random() * decoji.styles.length)].name;

      if (command.mapping) {
        const style = decoji.styles.find(s => s.name === styleName);

        if (!style) {
          throw "invalid style name.";
        }

        Object.entries(style.mapping).forEach(([from, to]) =>
          console.log(`${from} -> ${to || ""}`)
        );
      } else {
        console.log(decoji.decorate(input, styleName));
      }
    }
  })
  .parse(process.argv);
