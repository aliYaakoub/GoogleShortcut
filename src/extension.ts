import * as vscode from 'vscode';
import { sources } from './sources';
import { SourceType } from './types';

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('google-shortcut.GetHelp', async () => {

		const clipboard = await vscode.env.clipboard.readText();

		const pick: SourceType | undefined = await vscode.window.showQuickPick(
			sources, 
			{
				placeHolder: 'Select where you want to search.'
				//ovpyqtwbceo7ngcmcip3swrvtlwedlczejbsqylglz4z4zeoi4za
			}
		);

		const question: string | undefined = await vscode.window.showInputBox({
			placeHolder: 'Example: how to center a div :)',
			prompt: "Type the question/error you want to search for...",
			value: clipboard || '',
		});

		if (pick && question){
			vscode.env.openExternal(vscode.Uri.parse(pick.link + question.replace(/ /g, '+')));
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
