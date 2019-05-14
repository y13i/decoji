import { MathematicalBold } from "./mathematicalBold";
import { MathematicalItalic } from "./mathematicalItalic";
import { MathematicalBoldItalic } from "./mathematicalBoldItalic";
import { MathematicalScript } from "./mathematicalScript";
import { MathematicalBoldScript } from "./mathematicalBoldScript";
import { MathematicalFraktur } from "./mathematicalFraktur";
import { MathematicalDoubleStruck } from "./mathematicalDoubleStruck";
import { MathematicalBoldFraktur } from "./mathematicalBoldFraktur";
import { MathematicalSansSerif } from "./mathematicalSansSerif";
import { MathematicalSansSerifBold } from "./mathematicalSansSerifBold";
import { MathematicalSansSerifItalic } from "./mathematicalSansSerifItalic";
import { MathematicalSansSerifBoldItalic } from "./mathematicalSansSerifBoldItalic";
import { MathematicalMonospace } from "./mathematicalMonospace";
import { Circled } from "./circled";
import { Parenthesized } from "./parenthesized";
import { FullStop } from "./fullStop";
import { DoubleCircled } from "./doubleCircled";
import { Squared } from "./squared";
import { Comma } from "./comma";
import { NegativeCircled } from "./negativeCircled";
import { Superscript } from "./superscript";
import { Subscript } from "./subscript";
import { Identical } from "./identical";

export const styles = [
  MathematicalBold,
  MathematicalItalic,
  MathematicalBoldItalic,
  MathematicalScript,
  MathematicalBoldScript,
  MathematicalFraktur,
  MathematicalDoubleStruck,
  MathematicalBoldFraktur,
  MathematicalSansSerif,
  MathematicalSansSerifBold,
  MathematicalSansSerifItalic,
  MathematicalSansSerifBoldItalic,
  MathematicalMonospace,
  Circled,
  Parenthesized,
  FullStop,
  DoubleCircled,
  Squared,
  Comma,
  NegativeCircled,
  Superscript,
  Subscript,
  Identical
] as const;

export const styleNames = styles.map(c => c.name);
export type Style = typeof styles[number];

export type StyleBase = {
  name: string;
  mapping: Record<string, string | undefined>;
};
