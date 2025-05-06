# Changelog

# 1.2.
- Dependencies updated.

# 1.2.4
- Package update.

# 1.2.3
- Fix for #17: Flags for INI/INIR/IND/INDR/OUTI/OUTD/OTIR/OTDR and IN x,(C)

# 1.2.2
- Fix for #15: Incorrect description of the effect on the carry flag in I/O commands.
- Changed carry flag for OUTI, OUTD, OTIR, OTDR, INI, IND, INIR, INDR.
- Changed flags for LD A,I and LD A,R.
- Fixed ":=" notation of a few commands.

# 1.2.1
- Fix for #13: Don't recognize RST with # number

# 1.2.0
- Packed with esbuild.
- Fixed #14: Wrong legend inc ix
- activationEvent changed to "onStartupFinished".
- Tests changed from Mocha to jest.

# 1.1.1
- Fixed #6: RST not shown correctly: "RST 0"

# 1.1.0
- Added undocumented IX/IY bit instructions (DDCB, FDCB).
- Removed unused files.
- Fixed indexed access recognition if no index is used, e.g. "sla (iy)" is recognized now.

## 1.0.5
- Thanks to @alexanderk23 for the fixes:
	- OUTI/OUTD pre-decrements the B register
	- OUT (C), 0 outputs 0 on NMOS Z80s, 255 on CMOS Z80s
	- Minor typos

## 1.0.4
- CTRL-F allowed in instruction webview. Allows searching the instructions.

## 1.0.3
- Check for undefined instruction added.

## 1.0.2
- Allowed for "//" C-style comments (fix by oxidaan)

## 1.0.1
- Added donate button.

## 1.0.0
- Fixed vulnerability.

## 0.6.4
- Incorporated some changes from here https://github.com/theNestruo/z80-asm-meter-vscode/issues/17 (although they didn't had a direct impact to z80-instruction-set).

## 0.6.3
- Fixed T-states for ADD HL,nn.

## 0.6.2
- Description of "BRLC DE,B", "SETAE" and "PUSH nn" corrected thanks to Ped7g.

## 0.6.1
- Link changed to customizable.
- All opcodes included.

## 0.6.0
- Link added.

## 0.5.0
- WebView to show Z80 instructions.

## 0.4.0
- Markdown as hovering string.
- More unit tests.

## 0.3.0
- Adding flags and decriptions.

## 0.2.0
- Added Z80N instructions.

## 0.1.0
- Initial version. Mainly copied from asm-code-lens.

