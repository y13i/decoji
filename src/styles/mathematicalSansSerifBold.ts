import { StyleBase } from ".";
import { buildMap, alphabetic, numeric0to9 } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalSansSerifBold: StyleBase & {
  name: "mathematical-sans-serif-bold";
} = {
  name: "mathematical-sans-serif-bold",
  mapping: {
    ...buildMap(alphabetic, "𝗔"),
    ...buildMap(numeric0to9, "𝟬")
  }
};
