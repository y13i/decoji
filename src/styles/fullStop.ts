import { StyleBase } from ".";
import { buildMap, numeric1to9 } from "./utils";

// https://unicode-table.com/en/blocks/enclosed-alphanumerics/
// https://unicode-table.com/en/blocks/enclosed-alphanumeric-supplement/
export const FullStop: StyleBase & {
  name: "full-stop";
} = {
  name: "full-stop",
  mapping: { ...buildMap(numeric1to9, "⒈"), "0": "🄀" }
};
