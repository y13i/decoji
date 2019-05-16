#!/usr/bin/env node
/* eslint @typescript-eslint/no-var-requires: 0 */
/* eslint no-console: 0 */

const { Command } = require("commander");
const packageMetadata = require("../package.json");
const { decorate, styles } = require("../dist/cjs");

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
      console.log(
        JSON.stringify(
          styles.reduce(
            (acc, style) => ({
              ...acc,
              [style.name]: decorate(input, style.name)
            }),
            {}
          ),
          undefined,
          2
        )
      );
    } else {
      const styleName =
        command.style || styles[Math.floor(Math.random() * styles.length)].name;

      if (command.mapping) {
        const style = styles.find(s => s.name === styleName);

        if (!style) {
          throw "invalid style name.";
        }

        console.log(JSON.stringify(style.mapping, undefined, 2));
      } else {
        console.log(decorate(input, styleName));
      }
    }
  })
  .parse(process.argv);
