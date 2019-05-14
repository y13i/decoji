import { StyleBase } from ".";
import { buildMap, alphabetic, numeric0to9 } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalSansSerif: StyleBase & {
  name: "mathematical-sans-serif";
} = {
  name: "mathematical-sans-serif",
  mapping: {
    ...buildMap(alphabetic, "𝖠"),
    ...buildMap(numeric0to9, "𝟢")
  }
};
