import { StyleBase } from ".";
import { buildMap, alphabetic } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalBoldFraktur: StyleBase & {
  name: "mathematical-bold-fraktur";
} = {
  name: "mathematical-bold-fraktur",
  mapping: buildMap(alphabetic, "𝕬")
};
