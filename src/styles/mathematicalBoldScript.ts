import { StyleBase } from ".";
import { buildMap, alphabetic } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalBoldScript: StyleBase & {
  name: "mathematical-bold-script";
} = {
  name: "mathematical-bold-script",
  mapping: buildMap(alphabetic, "𝓐")
};
