import { StyleBase } from ".";
import { buildMap, numeric0to9 } from "./utils";

// https://unicode-table.com/en/blocks/superscripts-and-subscripts/
export const Subscript: StyleBase & {
  name: "subscript";
} = {
  name: "subscript",
  mapping: {
    ...buildMap(numeric0to9, "₀"),
    "+": "₊",
    "-": "₋",
    "=": "₌",
    "(": "₍",
    ")": "₎",
    a: "ₐ",
    e: "ₑ",
    o: "ₒ",
    x: "ₓ",
    ə: "ₔ",
    h: "ₕ",
    k: "ₖ",
    l: "ₗ",
    m: "ₘ",
    n: "ₙ",
    p: "ₚ",
    s: "ₛ",
    t: "ₜ"
  }
};
