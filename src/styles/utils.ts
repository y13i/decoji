export const alphabeticCapital = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
export const alphabeticSmall = [..."abcdefghijklmnopqrstuvwxyz"];
export const alphabetic = [...alphabeticCapital, ...alphabeticSmall];
export const numeric1to9 = [..."123456789"];
export const numeric0to9 = ["0", ...numeric1to9];

export function buildMap(
  mapTo: string[],
  firstCharacter: string
): Record<string, string> {
  return mapTo.reduce(
    (acc, character, index) => ({
      ...acc,
      [character]: String.fromCodePoint(firstCharacter.codePointAt(0)! + index)
    }),
    {} as Record<string, string>
  );
}
