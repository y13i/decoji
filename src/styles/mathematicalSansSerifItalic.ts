import { StyleBase } from ".";
import { buildMap, alphabetic } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalSansSerifItalic: StyleBase & {
  name: "mathematical-sans-serif-italic";
} = {
  name: "mathematical-sans-serif-italic",
  mapping: buildMap(alphabetic, "𝘈")
};
