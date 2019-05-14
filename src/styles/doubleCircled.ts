import { StyleBase } from ".";
import { buildMap, numeric1to9 } from "./utils";

// https://unicode-table.com/en/blocks/enclosed-alphanumerics/
export const DoubleCircled: StyleBase & {
  name: "double-circled";
} = {
  name: "double-circled",
  mapping: {
    ...buildMap(numeric1to9, "⓵")
  }
};
