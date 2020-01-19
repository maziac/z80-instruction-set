'use strict';
import * as vscode from 'vscode';
import { Z80InstructionSet } from './z80InstructionSet';
import { extractInstruction } from './HoverUtils';


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
            const rawInstruction = extractInstruction(line, position.character);
            
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

}
