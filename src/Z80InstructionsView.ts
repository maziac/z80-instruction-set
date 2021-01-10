import * as vscode from 'vscode';
import { z80InstructionSetRawData } from './z80InstructionSetRawData';


/**
 * A Webview that shows all Z80 instructions.
 */
export class Z80InstructionsView {

	/**
	 * Creates a new WebView and shows it.
	 */
	public static Show() {
		const z80View = new Z80InstructionsView();
		z80View.setHtml();
	}


	// The panel to show the base view in vscode.
	protected vscodePanel: vscode.WebviewPanel;


	/**
	 * Creates the basic panel.
	 */
	constructor() {
		// create vscode panel view
		this.vscodePanel = vscode.window.createWebviewPanel('', 'Z80 Instructions', { preserveFocus: true, viewColumn: vscode.ViewColumn.Nine }, { enableScripts: false });
	}


	/**
	 * Dispose the view.
	 */
	public disposeView() {
	}



	/**
	 * Creates one html table with the Z80 instructions.
	 */
	protected createZ80HtmlTable(): string {
		// Link
		const settings = vscode.workspace.getConfiguration('z80-instruction-set');
		const link = settings.z80Link || "";

		// Create table
		let tableRows = '';
		for (const instrArray of z80InstructionSetRawData) {
			const descr = instrArray[7];
			let name = instrArray[0];

			// Add link
			if (link != "")
				name = `<a href="${link}")>${name}</a>`;

			tableRows += '<tr> <td width="20%">' + name + '</td> <td width="80%">' + descr + '</td> </tr>\n';
		}

		const table = '<table border="1">\n<tr> <th>Instruction</th> <th>Description</th> </tr>\n' + tableRows + '</table>';

		return table;
	}


	/**
	 * Sets the html code to display the Z80 instructions.
	 */
	protected setHtml() {
		// Get rows
		const tableRows = this.createZ80HtmlTable();

		// Create complete html
		const html = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Dump</title>
		</head>

		<body style="font-family: Courier">

		${tableRows}

		</body>
		</html>`;

		// Set html to view
		this.vscodePanel.webview.html = html;
	}

}
