

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
