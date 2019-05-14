import { StyleBase } from ".";
import { buildMap, alphabetic } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalBoldItalic: StyleBase & {
  name: "mathematical-bold-italic";
} = {
  name: "mathematical-bold-italic",
  mapping: buildMap(alphabetic, "𝑨")
};
