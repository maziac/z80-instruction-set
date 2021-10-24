
export function parseTimings(s: string): number[] {
    const ss = s.split("/");
    const t0 = parseInt(ss[0]);
    return ss.length === 1 ? [t0, t0] : [t0, parseInt(ss[1])];
}

export function extractMnemonicOf(s: string): string {
    const i = s.indexOf(" ");
    return i === -1 ? s : s.substring(0, i);
}

export function extractOperandsOf(s: string): string[] {
    const i = s.indexOf(" ");
    return i === -1 ? [] : s.substr(i + 1).split(/\s*,\s*/);
}
