export class StringUtils {
    public toUpperCase(arg: string) {
        if (!arg) {
            throw new Error("Invalid argument!");
        }
        return toUpperCase(arg);
    }
}

export function toUpperCase(arg: string) {
    return arg.toUpperCase();
}

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined // Last one can have or omit, but comma is typically preferred.
};

export function getStringInfo(arg: string): stringInfo {
    return {
        lowerCase: arg.toLowerCase(),
        upperCase: arg.toUpperCase(),
        characters: Array.from(arg),
        length: arg.length, // 'length' is a property, not a method, that's why it does not have parentheses.
        extraInfo: {}
    }
}