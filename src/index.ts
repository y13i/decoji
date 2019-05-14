import { Style, styles } from "./styles";
export { styles, styleNames } from "./styles";

export function decoji(string: string, styleName: Style["name"]): string {
  const style = styles.find(s => s.name === styleName);

  if (!style) {
    throw "invalid style name.";
  }

  return [...string].map(c => style.mapping[c] || c).join("");
}
