import * as assert from 'assert';

/**
 * Extracts the instruction from an input line. index points to the
 * index the mouse hovers over.
 * @returns An uppercase string like "LD A,B".
 */
export function extractInstruction(line: string, index: number): string {
    // Get string beginning with word
    let pos = index;
    while (true) {
        pos--;
        if (pos < 0)
            break;
        const ch = line.charAt(pos);
        if (/[^a-z]/i.exec(ch))
            break;
    }
    pos++;
    let rightString = line.substr(pos);

    // Now find end of instruction, i.e. until ";" or ":"
    let len = 0;
    for (const ch of rightString) {
        if (ch == ';' || ch == ':')
            break;
        len++;
    }
    let rawInstruction = rightString.substr(0, len).trim().toUpperCase();
    rawInstruction = rawInstruction.replace(/\s+/, ' ');

    return rawInstruction;
}


/**
 * Creates a legend for a given description.
 * I.e. adds only the parts that are contained in the instruction.
 * @param instruction E.g. "BIT b,(IX+o)"
 * @returns E.g "b=0-7, o=-128 to 127)". 'undefined' if no legend necessary.
 */
export function getLegend(instruction: string): string {
    const legendArr = new Array<string>();
    // Check for a 'b'
    if (instruction.indexOf('b') >= 0)
        legendArr.push('b=0-7 (bit)');
    // Check for a 'n'
    if (instruction.indexOf('n') >= 0)
        legendArr.push('n=0-255');
    // Check for a 'nn'
    if (instruction.indexOf('nn') >= 0)
        legendArr.push('nn=0-65535');
    // Check for a 'o'
    if (instruction.indexOf('o') >= 0)
        legendArr.push('o=-128 to 127');
    // Check for a 'r'
    if (instruction.indexOf('r') >= 0)
        legendArr.push('r: B=0 C=1 D=2 E=3 H=4 L=5 A=7');
    // Check for a 'p'
    if (instruction.indexOf('p') >= 0)
        legendArr.push('p: B=0 C=1 D=2 E=3 IXh=4 IXl=5 A=7');
    // Check for a 'q'
    if (instruction.indexOf('q') >= 0)
        legendArr.push('q: B=0 C=1 D=2 E=3 IYh=4 IYl=5 A=7');

    // Check if empty
    if (legendArr.length == 0)
        return undefined;

    // Create string from array
    const legend = legendArr.join(', ');

    // TODO: TEST

    return legend;
}


/**
 * Creates the  description of the flags from the 'flags' string.
 * @param flags E.g. "***?1-"
 * @returns E.g "SZH are affected, P/V is unknown, N is 1, C is not affected.
 */
export function getFlagsDescription(flags: string): string {
   /* Flag meanings:
    -               Flag unaffected
    *               Flag affected
    0               Flag reset
    1               Flag set
    ?               Unknown
    P               Parity-Flag used as Parity
    V               Parity-Flag used as Overflow-flag
    Note: P, V are interpreted as *
    Order: SZHPNC
    */

    // Safety checks
    if (flags == undefined)
        return "undefined";
   if (flags.length == 0)
        return 'None affected';
    assert(flags.length == 6, 'Problem with length of flags definition!');

    const flagArray = ['S', 'Z', 'H', 'P', 'N', 'C'];
    let affected = '';
    let notAffected = '';
    let reset = '';
    let set = '';
    let unknown = '';

    // Returns 'is' if string length is one, otherwise 'are'
    let IsAre = (s: string) => {
        if (s.length == 1)
            return 'is';
        return 'are';
    }

    // Affected
    for (let i = 0; i < 6; i++) {
        const ch = flags.charAt(i);
        if (ch == '*' || ch == 'P' || ch == 'V')
            affected += flagArray[i];
    }

    // Not affected
    for (let i = 0; i < 6; i++) {
        if (flags.charAt(i) == '-')
            notAffected += flagArray[i];
    }

    // Reset
    for (let i = 0; i < 6; i++) {
        if (flags.charAt(i) == '0')
            reset += flagArray[i];
    }

    // Set
    for (let i = 0; i < 6; i++) {
        if (flags.charAt(i) == '1')
            set += flagArray[i];
    }

    // Unkown
    for (let i = 0; i < 6; i++) {
        if (flags.charAt(i) == '?')
            unknown += flagArray[i];
    }

    // Concatenate strings
    let result = '';
    if (affected.length > 0)
        result += affected + ' ' + IsAre(affected) + ' affected, ';
    if (reset.length > 0)
        result += reset + ' ' + IsAre(reset) + ' 0, ';
    if (set.length > 0)
        result += set + ' ' + IsAre(set) + ' 1, ';
    if (notAffected.length > 0)
        result += notAffected + ' ' + IsAre(notAffected) + ' not affected, ';
    if (unknown.length > 0)
        result += unknown + ' ' + IsAre(unknown) + ' unknown, ';
    assert(result.length > 0, 'Problem with flags definition!');

    // Remove last ','
    result = result.substr(0, result.length - 2);

    // TODO: TEST

    return result;
}
