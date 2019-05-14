import { StyleBase } from ".";
import { buildMap, alphabetic } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalSansSerifBoldItalic: StyleBase & {
  name: "mathematical-sans-serif-bold-italic";
} = {
  name: "mathematical-sans-serif-bold-italic",
  mapping: buildMap(alphabetic, "𝘼")
};
