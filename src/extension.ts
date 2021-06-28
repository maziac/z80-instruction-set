'use strict';

import * as vscode from 'vscode';
import { HoverProvider } from './HoverProvider';
import { Z80InstructionsView } from './Z80InstructionsView';


export function activate(context: vscode.ExtensionContext) {
	// Enable logging.
    configure(context);

    // Check for every change.
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(event => {
        configure(context);
    }));

    // Register command once.
    vscode.commands.registerCommand('z80-instruction-set.show-all-instructions', () => {
        Z80InstructionsView.Show();
    });
}


/**
 * Reads the confguration.
 */
function configure(context: vscode.ExtensionContext) {
    const settings = vscode.workspace.getConfiguration('z80-instruction-set');

    // Note: don't add 'language' property, otherwise other extension with similar file pattern may not work.
    // If the identifier is missing it also don't help to define it in package.json. And if "id" would be used it clashes again with other extensions.
    const asmFiles: vscode.DocumentSelector = { scheme: "file", pattern: settings.files};

    // Deregister
    if (regHoverProvider) {
        regHoverProvider.dispose();
        const i = context.subscriptions.indexOf(regHoverProvider);
        context.subscriptions.splice(i, 1);
        regHoverProvider = undefined;
    }

    // Enable hovering
    if(settings.enableHovering) {
        // Register
        regHoverProvider = vscode.languages.registerHoverProvider(asmFiles, new HoverProvider());
        context.subscriptions.push(regHoverProvider);
    }
}

let regHoverProvider: vscode.Disposable;



// this method is called when your extension is deactivated
export function deactivate() {
}
