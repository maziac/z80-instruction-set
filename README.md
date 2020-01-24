# Z80 Instruction Set

This is a hover provider for vscode.
I.e. if you hover over a Z80 instruction (e.g. "LD A,5") the opcode and a description for the instruction is displayed.

![](assets/hover.jpg)

Note: It does also show the opcodes for the Z80N instructions (ZX Spectrum Next).


## Installation

Install through Visual Studio Code Marketplace.
The extension is called "Z80 Instruction Set".

<!--
It supports the following assembler file extensions:
.asm, .s, .inc, .a80.
-->


# Configuration

- "z80-instruction-set.enableHovering": Enable/disable the hovering. I.e. enable/disable the extension.
- "z80-instruction-set.z80Link": Link to Z80 documentation. You can change this e.g. to point to some other html documentation. This simply adds a link to all instruction to make it easier to open external documentation if the hover information is not sufficient. Use an empty string "" to disable.


# Misc

To view all instructions open the command palette (press F1) and enter "Show all Z80 instructions".
A WebView opens with the instructions.

![](assets/Z80InstructionsView.jpg)


# Acknowledgememts

Main parts of the code (the z80 instruction decoding) has been taken from [theNuestro](https://github.com/theNestruo)'s [z80-asm-code-meter](https://github.com/theNestruo/z80-asm-meter-vscode) which is licensed under LGPL-3.0.
