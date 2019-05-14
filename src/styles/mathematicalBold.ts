import { StyleBase } from ".";
import { buildMap, alphabetic, numeric0to9 } from "./utils";

// https://unicode-table.com/en/blocks/mathematical-alphanumeric-symbols/
export const MathematicalBold: StyleBase & { name: "mathematical-bold" } = {
  name: "mathematical-bold",
  mapping: {
    ...buildMap(alphabetic, "𝐀"),
    ...buildMap(numeric0to9, "𝟎")
  }
};
