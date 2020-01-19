'use strict';
import * as vscode from 'vscode';
import { Z80InstructionSet } from './z80InstructionSet';
import { formatTiming, extractInstructionFrom } from './z80Utils';


/**
 * HoverProvider for assembly language.
 */
export class HoverProvider implements vscode.HoverProvider {

    /**
     * Called from vscode if the user hovers over a word.
     * @param document The current document.
     * @param position The position of the word for which the references should be found.
     * @param options 
     * @param token 
     */
    public provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken): Thenable<vscode.Hover> {
        return this.search(document, position);
    }

    
    /**
     * Does a search for a word. I.e. finds all references of the word.
     * @param document The document that contains the word.
     * @param position The word position.
     * @return A promise with a vscode.Hover object.
     */
    protected search(document: vscode.TextDocument, position: vscode.Position): Thenable<vscode.Hover>
    {
        return new Promise<vscode.Hover>((resolve, reject) => {
            // Check for local label
            const line = document.lineAt(position.line).text;

            // Extracts the instruction
            const rawInstruction = this.extractInstruction(line, position.character);
            
            // Get most probably instruction
            const instruction = Z80InstructionSet.instance.parseInstruction(rawInstruction);

            // return
            const hoverTexts = new Array<string>();
            hoverTexts.push('HEX: ' + instruction.getOpcode());
            hoverTexts.push(instruction.getInstruction());
            hoverTexts.push(rawInstruction);
            const hover = new vscode.Hover(hoverTexts);
            resolve(hover);
        });
    }


    /**
     * Extracts the instruction from an input line. index points to the
     * index the mouse hovers over.
     * @returns An uppercase string like "LD A,B".
     */
    protected extractInstruction(line: string, index: number): string {
        // Get string beginning with word
        let pos = index;
        while (true) {
            pos--;
            if (pos < 0)
                break;
            const ch = line.charAt(pos);
            if (/\s/.exec(ch))
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

}
