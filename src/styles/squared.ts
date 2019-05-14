import { StyleBase } from ".";
import { buildMap, alphabeticCapital } from "./utils";

// https://unicode-table.com/en/blocks/enclosed-alphanumeric-supplement/
export const Squared: StyleBase & {
  name: "squared";
} = {
  name: "squared",
  mapping: {
    ...buildMap(alphabeticCapital, "🄰")
  }
};
