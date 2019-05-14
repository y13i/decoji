import { StyleBase } from ".";
import { buildMap, alphabetic, numeric1to9 } from "./utils";

// https://unicode-table.com/en/blocks/enclosed-alphanumerics/
export const Circled: StyleBase & {
  name: "circled";
} = {
  name: "circled",
  mapping: {
    ...buildMap(numeric1to9, "①"),
    ...buildMap(alphabetic, "Ⓐ"),
    "0": "⓪"
  }
};
