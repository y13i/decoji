import { StyleBase } from ".";
import { buildMap, numeric0to9 } from "./utils";

// https://unicode-table.com/en/blocks/superscripts-and-subscripts/
export const Superscript: StyleBase & {
  name: "superscript";
} = {
  name: "superscript",
  mapping: {
    ...buildMap(numeric0to9, "⁰"),
    "1": "¹",
    "2": "²",
    "3": "³",
    "+": "⁺",
    "-": "⁻",
    "=": "⁼",
    "(": "⁽",
    ")": "⁾",
    n: "ⁿ"
  }
};
