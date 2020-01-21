// @see http://map.grauw.nl/resources/z80instr.php
// @see http://www.cpcwiki.eu/forum/programming/rasm-z80-assembler-in-beta/

// [ Instruction, Timing Z80, Z80+M1, CPC, Opcode, Size ]
export const z80InstructionSetRawData = [
	["ADC A,(HL)", "7", "8", "2", "8E", "1", "***V0*", "A := A+[HL]+CY" ],
	["ADC A,(IX+o)", "19", "21", "3", "DD 8E o", "3", "***V0*", "A := A+[IX+o]+CY"],
	["ADC A,(IY+o)", "19", "21", "3", "FD 8E o", "3", "***V0*", "A := A+[IY+o]+CY"],
	["ADC A,IXh", "8", "10", "2", "DD 8C", "2"],
	["ADC A,IXl", "8", "10", "2", "DD 8D", "2"],
	["ADC A,IYh", "8", "10", "2", "FD 8C", "2"],
	["ADC A,IYl", "8", "10", "2", "FD 8D", "2"],
	["ADC A,n", "7", "8", "2", "CE n", "2", "***V0*", "A := A+n+CY" ],
	["ADC A,r", "4", "5", "1", "88+r", "1", "***V0*", "A := A+r+CY"],
	["ADC HL,BC", "15", "17", "4", "ED 4A", "2", "***V0*", "HL := HL+BC+CY" ],
	["ADC HL,DE", "15", "17", "4", "ED 5A", "2", "***V0*", "HL := HL+DE+CY" ],
	["ADC HL,HL", "15", "17", "4", "ED 6A", "2", "***V0*", "HL := HL+HL+CY" ],
	["ADC HL,SP", "15", "17", "4", "ED 7A", "2", "***V0*", "HL := HL+SP+CY" ],
	["ADD A,(HL)", "7", "8", "2", "86", "1", "***V0*", "A+=[HL]" ],
	["ADD A,(IX+o)", "19", "21", "3", "DD 86 o", "3", "***V0*", "A := A+[IX+o]" ],
	["ADD A,(IY+o)", "19", "21", "3", "FD 86 o", "3", "***V0*", "A := A+[IY+o]" ],
	["ADD A,IXh", "8", "10", "2", "DD 84", "2"],
	["ADD A,IXl", "8", "10", "2", "DD 85", "2"],
	["ADD A,IYh", "8", "10", "2", "FD 84", "2"],
	["ADD A,IYl", "8", "10", "2", "FD 85", "2"],
	["ADD A,n", "7", "8", "2", "C6 n", "2", "***V0*", "A := A+n" ],
	["ADD A,r", "4", "5", "1", "80+r", "1", "***V0*", "A := A+r" ],
	["ADD HL,BC", "11", "12", "3", "9", "1", "--*-0*", "HL := HL+BC" ],
	["ADD HL,DE", "11", "12", "3", "19", "1", "--*-0*", "HL := HL+DE" ],
	["ADD HL,HL", "11", "12", "3", "29", "1", "--*-0*", "HL := HL+HL" ],
	["ADD HL,SP", "11", "12", "3", "39", "1", "--*-0*", "HL := HL+SP" ],
	["ADD IX,BC", "15", "17", "4", "DD 09", "2", "--*-0*", "IX := IX+BC" ],
	["ADD IX,DE", "15", "17", "4", "DD 19", "2", "--*-0*", "IX := IX+DE" ],
	["ADD IX,IX", "15", "17", "4", "DD 29", "2", "--*-0*", "IX := IX+IX" ],
	["ADD IX,SP", "15", "17", "4", "DD 39", "2", "--*-0*", "IX := IX+SP" ],
	["ADD IY,BC", "15", "17", "4", "FD 09", "2", "--*-0*", "IY := IY+BC" ],
	["ADD IY,DE", "15", "17", "4", "FD 19", "2", "--*-0*", "IY := IY+DE" ],
	["ADD IY,IY", "15", "17", "4", "FD 29", "2", "--*-0*", "IY := IY+IY" ],
	["ADD IY,SP", "15", "17", "4", "FD 39", "2", "--*-0*", "IY := IY+SP" ],
	["AND (HL)", "7", "8", "2", "A6", "1", "***P00", "A&=[HL]" ],
	["AND (IX+o)", "19", "21", "3", "DD A6 o", "3", "***P00", "A &= [IX+o]" ],
	["AND (IY+o)", "19", "21", "3", "FD A6 o", "3", "***P00", "A &= [IY+o]" ],
	["AND IXh", "8", "10", "2", "DD A4", "2"],
	["AND IXl", "8", "10", "2", "DD A5", "2"],
	["AND IYh", "8", "10", "2", "FD A4", "2"],
	["AND IYl", "8", "10", "2", "FD A5", "2"],
	["AND n", "7", "8", "2", "E6 n", "2", "***P00", "A &= n" ],
	["AND r", "4", "5", "1", "A0+r", "1", "***P00", "A &= r" ],
	[ "BIT b,(HL)", "12", "14", "3", "CB 46+8*b", "2", "?*1?0-", "Test (HL).b" ],
	["BIT b,(IX+o)", "20", "22", "6", "DD CB o 46+8*b", "4", "?*1?0-", "Test (IX+o).b" ],
	["BIT b,(IY+o)", "20", "22", "6", "FD CB o 46+8*b", "4", "?*1?0-", "Test (IY+o).b" ],
	["BIT b,r", "8", "10", "2", "CB 40+8*b+r", "2", "?*1?0-", "Test r.b" ],
	[ "CALL C,nn", "17/10", "18/11", "5/3", "DC nn nn", "3", "", "Call subroutine if Carry" ],
	["CALL M,nn", "17/10", "18/11", "5/3", "FC nn nn", "3", "", "Call subroutine if Sign Negative" ],
	["CALL NC,nn", "17/10", "18/11", "5/3", "D4 nn nn", "3", "", "Call subroutine if Non-Carry" ],
	["CALL nn", "17", "18", "5", "CD nn nn", "3", "", "Call subroutine unconditional" ],
	["CALL NZ,nn", "17/10", "18/11", "5/3", "C4 nn nn", "3", "", "Call subroutine if Non-Zero" ],
	["CALL P,nn", "17/10", "18/11", "5/3", "F4 nn nn", "3", "", "Call subroutine if Sign Positive" ],
	["CALL PE,nn", "17/10", "18/11", "5/3", "EC nn nn", "3", "", "Call subroutine if Parity Even" ],
	["CALL PO,nn", "17/10", "18/11", "5/3", "E4 nn nn", "3", "", "Call subroutine if Parity Odd" ],
	["CALL Z,nn", "17/10", "18/11", "5/3", "CC nn nn", "3", "", "Call subroutine if Zero" ],
	["CCF", "4", "5", "1", "3F", "1", "--*-0*", "CY := ~CY" ],
	["CP (HL)", "7", "8", "2", "BE", "1", "***V1*", "A-[HL]" ],
	["CP (IX+o)", "19", "21", "3", "DD BE o", "3", "***V1*", "A-[IX+o]" ],
	["CP (IY+o)", "19", "21", "3", "FD BE o", "3", "***V1*", "A-[IY+o]" ],
	["CP IXh", "8", "10", "2", "DD BC", "2"],
	["CP IXl", "8", "10", "2", "DD BD", "2"],
	["CP IYh", "8", "10", "2", "FD BC", "2"],
	["CP IYl", "8", "10", "2", "FD BD", "2"],
	["CP n", "7", "8", "2", "FE n", "2", "***V1*", "A-n" ],
	["CP r", "4", "5", "1", "B8+r", "1", "***V1*", "A-r" ],
	["CPD", "16", "18", "4", "ED A9", "2", "****1-", "A-[HL], HL := HL-1, BC := BC-1, P/V=0 if BC == 0" ],
	["CPDR", "21/16", "23/18", "6/4", "ED B9", "2", "****1-", "CPD until A == [HL] or BC == 0" ],
	["CPI", "16", "18", "4", "ED A1", "2", "****1-", "A-[HL], HL := HL+1, BC := BC-1, P/V=0 if BC == 0" ],
	["CPIR", "21/16", "23/18", "6/4", "ED B1", "2", "****1-", "CPD until A == [HL] or BC == 0" ],
	["CPL", "4", "5", "1", "2F", "1", "--1-1-", "A := ~A" ],
	["DAA", "4", "5", "1", "27", "1", "***P-*", "A := adjust result to BCD-format" ],
	["DEC (HL)", "11", "12", "3", "35", "1", "***V1-", "[HL] := [HL]-1" ],
	["DEC (IX+o)", "23", "25", "6", "DD 35 o", "3", "***V1-", "[IX+o] := [IX+o]-1"  ],
	["DEC (IY+o)", "23", "25", "6", "FD 35 o", "3", "***V1-", "[IY+o] := [IY+o]-1"  ],
	["DEC A", "4", "5", "1", "3D", "1", "***V1-", "A := A-1"  ],
	["DEC B", "4", "5", "1", "5", "1", "***V1-", "B := B-1"  ],
	[ "DEC BC", "6", "7", "2", "0B", "1", "", "BC := BC-1" ],
	["DEC C", "4", "5", "1", "0D", "1", "***V1-", "C := C-1" ],
	["DEC D", "4", "5", "1", "15", "1", "***V1-", "D := D-1" ],
	["DEC DE", "6", "7", "2", "1B", "1", "", "DE := DE-1" ],
	["DEC E", "4", "5", "1", "1D", "1", "***V1-", "E := E-1" ],
	["DEC H", "4", "5", "1", "25", "1", "***V1-", "H := H-1" ],
	["DEC HL", "6", "7", "2", "2B", "1", "", "HL := HL-1" ],
	["DEC IX", "10", "12", "3", "DD 2B", "2", "", "IX := IX-1" ],
	["DEC IXh", "8", "10", "2", "DD 25", "2"],
	["DEC IXl", "8", "10", "2", "DD 2D", "2"],
	["DEC IY", "10", "12", "3", "FD 2B", "2", "", "IY := IY-1" ],
	["DEC IYh", "8", "10", "2", "FD 25", "2"],
	["DEC IYl", "8", "10", "2", "FD 2D", "2"],
	["DEC L", "4", "5", "1", "2D", "2", "***V1-", "L := L-1" ],
	["DEC SP", "6", "7", "2", "3B", "1", "", "SP := SP-1" ],
	[ "DI", "4", "5", "1", "F3", "1", "", "Disable interrupts" ],
	["DJNZ o", "13/8", "14/9", "4/3", "10 o", "2", "", "B := B-1, if B != 0 then jump" ],
	["EI", "4", "5", "1", "FB", "1", "", "Enable interrupts" ],
	["EX (SP),HL", "19", "20", "6", "E3", "1", "", "[SP] <=> HL" ],
	["EX (SP),IX", "23", "25", "7", "DD E3", "2", "", "[SP] <=> IX" ],
	["EX (SP),IY", "23", "25", "7", "FD E3", "2", "", "[SP] <=> IY" ],
	["EX AF,AF'", "4", "5", "1", "8", "1", "******", "AF <=> AF'" ],
	["EX DE,HL", "4", "5", "1", "EB", "1", "", "DE <=> HL" ],
	["EXX", "4", "5", "1", "D9", "1", "", "BC <=> BC', DE <=> DE', HL <=> HL'" ],
	["HALT", "4", "5", "1", "76", "1", "", "Repeat NOP until interrupt" ],
	[ "IM 0", "8", "10", "2", "ED 46", "2", "", "Set interrupt mode 0" ],
	["IM 1", "8", "10", "2", "ED 56", "2", "", "Set interrupt mode 1" ],
	["IM 2", "8", "10", "2", "ED 5E", "2", "", "Set interrupt mode 2" ],
	[ "IN (C)", "12", "14", "4", "ED 70", "3" ], // alt. IN F,(C)
	["IN A,(C)", "12", "14", "3", "ED 78", "2", "***P0-", "A := port[BC]" ],
	["IN A,(n)", "11", "12", "3", "DB n", "2", "", "A := port[An]" ],
	["IN B,(C)", "12", "14", "4", "ED 40", "2", "***P0-", "B := port[BC]" ],
	["IN C,(C)", "12", "14", "4", "ED 48", "2", "***P0-", "C := port[BC]" ],
	["IN D,(C)", "12", "14", "4", "ED 50", "2", "***P0-", "D := port[BC]" ],
	["IN E,(C)", "12", "14", "4", "ED 58", "2", "***P0-", "E := port[BC]" ],
	[ "IN F,(C)", "12", "14", "4", "ED 70", "3" ], // alt. IN (C)
	["IN H,(C)", "12", "14", "4", "ED 60", "2", "***P0-", "H := port[BC]" ],
	["IN L,(C)", "12", "14", "4", "ED 68", "2", "***P0-", "L := port[BC]" ],
	["INC (HL)", "11", "12", "3", "34", "1", "***V0-", "[HL] := [HL]+1" ],
	["INC (IX+o)", "23", "25", "6", "DD 34 o", "3", "***V0-", "[IX+o] := [IX+o]+1" ],
	["INC (IY+o)", "23", "25", "6", "FD 34 o", "3", "***V0-", "[IY+o] := [IY+o]+1" ],
	["INC A", "4", "5", "1", "3C", "1", "***V0-", "A := A+1" ],
	["INC B", "4", "5", "1", "4", "1", "***V0-", "B := B+1" ],
	["INC BC", "6", "7", "2", "3", "1", "", "BC := BC+1" ],
	["INC C", "4", "5", "1", "0C", "1", "***V0-", "C := C+1" ],
	["INC D", "4", "5", "1", "14", "1", "***V0-", "D := D+1" ],
	["INC DE", "6", "7", "2", "13", "1", "", "DE := DE+1" ],
	["INC E", "4", "5", "1", "1C", "1", "***V0-", "E := E+1" ],
	["INC H", "4", "5", "1", "24", "1", "***V0-", "H := H+1" ],
	["INC HL", "6", "7", "1", "23", "1", "", "HL := HL+1" ],
	["INC IX", "10", "12", "3", "DD 23", "2", "", "IX := IY+1" ],
	["INC IXh", "8", "10", "2", "DD 24", "2"],
	["INC IXl", "8", "10", "2", "DD 2C", "2"],
	["INC IY", "10", "12", "3", "FD 23", "2", "", "IY := IY+1" ],
	["INC IYh", "8", "10", "2", "FD 24", "2"],
	["INC IYl", "8", "10", "2", "FD 2C", "2"],
	["INC L", "4", "5", "1", "2C", "1", "***V0-", "L := L+1" ],
	["INC SP", "6", "7", "2", "33", "1", "", "SP := SP+1" ],
	["IND", "16", "18", "5", "ED AA", "2", "***?1-", "[HL] := port[BC], HL := HL-1, B := B-1, Z is set if BC == 0"],
	["INDR", "21/16", "23/18", "6/5", "ED BA", "2", "01*?1-", "IND until B=0" ],
	["INI", "16", "18", "5", "ED A2", "2", "***?1-", "[HL] := port[BC], HL := HL+1, B := B-1, Z is set if BC == 0"],
	["INIR", "21/16", "23/18", "6/5", "ED B2", "2", "01*?1-", "INI until B=0" ],
	[ "JP (HL)", "4", "5", "1", "E9", "1", "", "Jump to HL" ], // alt. JP HL
	["JP (IX)", "8", "10", "2", "DD E9", "2", "", "Jump to IX" ],
	["JP (IY)", "8", "10", "2", "FD E9", "2", "", "Jump to IY" ],
	["JP C,nn", "10", "11", "4/3", "DA nn nn", "3", "", "If CY then jump to nn" ],
	["JP HL", "4", "5", "1", "E9", "1", "", "Jump to HL" ], // alt. JP (HL)
	["JP M,nn", "10", "11", "4/3", "FA nn nn", "3", "", "If sign negative then jump to nn" ],
	["JP NC,nn", "10", "11", "4/3", "D2 nn nn", "3", "", "If Non-CY then jump to nn" ],
	["JP nn", "10", "11", "3", "C3 nn nn", "3", "", "Jump to nn" ],
	["JP NZ,nn", "10", "11", "4/3", "C2 nn nn", "3", "", "If Non-Zero then jump to nn" ],
	["JP P,nn", "10", "11", "4/3", "F2 nn nn", "3", "", "If sign positive then jump to nn" ],
	["JP PE,nn", "10", "11", "4/3", "EA nn nn", "3", "", "If parity even then jump to nn" ],
	["JP PO,nn", "10", "11", "4/3", "E2 nn nn", "3", "", "If parity odd then jump to nn" ],
	["JP Z,nn", "10", "11", "4/3", "CA nn nn", "3", "", "If Zero then jump to nn" ],
	["JR C,o", "12/7", "13/8", "3/2", "38 o", "2", "", "If CY then jump relative" ],
	["JR NC,o", "12/7", "13/8", "3/2", "30 o", "2", "", "If Non-CY then jump relative" ],
	["JR NZ,o", "12/7", "13/8", "3/2", "20 o", "2", "", "If Non-Zero then jump relative" ],
	["JR o", "12", "13", "3", "18 o", "2", "", "Jump relative" ],
	["JR Z,o", "12/7", "13/8", "3/2", "28 o", "2", "", "If Zero then jump relative" ],
	[ "LD (BC),A", "7", "8", "2", "2", "1" , "", "(BC) := A"],
	[ "LD (DE),A", "7", "8", "2", "12", "1" , "", "(DE) := A"],
	[ "LD (HL),n", "10", "11", "3", "36 n", "2" , "", "(HL) := n"],
	[ "LD (HL),r", "7", "8", "2", "70+r", "1" , "", "(HL) := r"],
	[ "LD (IX+o),n", "19", "21", "6", "DD 36 o n", "4" , "", "(IX+o) := n"],
	[ "LD (IX+o),r", "19", "21", "5", "DD 70+r o", "3" , "", "(IX+o) := r"],
	[ "LD (IY+o),n", "19", "21", "6", "FD 36 o n", "4" , "", "(IY+o) := n"],
	[ "LD (IY+o),r", "19", "21", "5", "FD 70+r o", "3" , "", "(IY+o) := r"],
	[ "LD (nn),A", "13", "14", "4", "32 nn nn", "3" , "", "(nn) := A"],
	[ "LD (nn),BC", "20", "22", "6", "ED 43 nn nn", "4" , "", "(nn) := BC"],
	[ "LD (nn),DE", "20", "22", "6", "ED 53 nn nn", "4" , "", "(nn) := DE"],
	[ "LD (nn),HL", "16", "17", "5", "22 nn nn", "3" , "", "(nn) := HL"],
	[ "LD (nn),IX", "20", "22", "6", "DD 22 nn nn", "4" , "", "(nn) := IX"],
	[ "LD (nn),IY", "20", "22", "6", "FD 22 nn nn", "4" , "", "(nn) := IY"],
	[ "LD (nn),SP", "20", "22", "6", "ED 73 nn nn", "4" , "", "(nn) := SP"],
	[ "LD A,(BC)", "7", "8", "2", "0A", "1" , "", "A := (BC)"],
	[ "LD A,(DE)", "7", "8", "2", "1A", "1" , "", "A := (DE)"],
	[ "LD A,(HL)", "7", "8", "2", "7E", "1" , "", "A := (HL)"],
	[ "LD A,(IX+o)", "19", "21", "5", "DD 7E o", "3" , "", "A := (IX+o)"],
	[ "LD A,(IY+o)", "19", "21", "5", "FD 7E o", "3" , "", "A := (IY+o)"],
	[ "LD A,(nn)", "13", "14", "4", "3A nn nn", "3" , "", "A := (nn)"],
	[ "LD A,I", "9", "11", "3", "ED 57", "2" , "", "A := I"],
	["LD A,IXh", "8", "10", "2", "DD 7C", "2", "", "A := IXh"],
	["LD A,IXl", "8", "10", "2", "DD 7D", "2", "", "A := IXl"],
	["LD A,IYh", "8", "10", "2", "FD 7C", "2", "", "A := IYh"],
	["LD A,IYl", "8", "10", "2", "FD 7D", "2", "", "A := IYl"],
	[ "LD A,n", "7", "8", "2", "3E n", "2" , "", "A := n"],
	[ "LD A,r", "4", "5", "1", "78+r", "1" , "", "A := r"],
	[ "LD A,R", "9", "11", "3", "ED 5F", "2" , "", "A := R"],
	[ "LD B,(HL)", "7", "8", "2", "46", "1" , "", "B := (HL)"],
	[ "LD B,(IX+o)", "19", "21", "5", "DD 46 o", "3" , "", "B := (IX+o)"],
	[ "LD B,(IY+o)", "19", "21", "5", "FD 46 o", "3" , "", "B := (IY+o)"],
	["LD B,IXh", "8", "10", "2", "DD 44", "2", "", "B := IXh"],
	["LD B,IXl", "8", "10", "2", "DD 45", "2", "", "B := IXl"],
	["LD B,IYh", "8", "10", "2", "FD 44", "2", "", "B := IYh"],
	["LD B,IYl", "8", "10", "2", "FD 45", "2", "", "B := IYl"],
	[ "LD B,n", "7", "8", "2", "06 n", "2" , "", "B := n"],
	[ "LD B,r", "4", "5", "1", "40+r", "1" , "", "B := r"],
	[ "LD BC,(nn)", "20", "22", "6", "ED 4B nn nn", "4" , "", "BC := (nn)"],
	[ "LD BC,nn", "10", "11", "3", "01 nn nn", "3" , "", "BC := nn"],
	[ "LD C,(HL)", "7", "8", "2", "4E", "1" , "", "C := (HL)"],
	[ "LD C,(IX+o)", "19", "21", "5", "DD 4E o", "3" , "", "C := (IX+o)"],
	[ "LD C,(IY+o)", "19", "21", "5", "FD 4E o", "3" , "", "C := (IY+o)"],
	["LD C,IXh", "8", "10", "2", "DD 4C", "2", "", "C := IXh"],
	["LD C,IXl", "8", "10", "2", "DD 4D", "2", "", "C := IXl"],
	["LD C,IYh", "8", "10", "2", "FD 4C", "2", "", "C := IYh"],
	["LD C,IYl", "8", "10", "2", "FD 4D", "2", "", "C := IYl"],
	[ "LD C,n", "7", "8", "2", "0E n", "2" , "", "C := n"],
	[ "LD C,r", "4", "5", "1", "48+r", "1" , "", "C := r"],
	[ "LD D,(HL)", "7", "8", "2", "56", "1" , "", "D := (HL)"],
	[ "LD D,(IX+o)", "19", "21", "5", "DD 56 o", "3" , "", "D := (IX+o)"],
	[ "LD D,(IY+o)", "19", "21", "5", "FD 56 o", "3" , "", "D := (IY+o)"],
	["LD D,IXh", "8", "10", "2", "DD 54", "2", "", "D := IXh"],
	["LD D,IXl", "8", "10", "2", "DD 55", "2", "", "D := IXl"],
	["LD D,IYh", "8", "10", "2", "FD 54", "2", "", "D := IYh"],
	["LD D,IYl", "8", "10", "2", "FD 55", "2", "", "D := IYl"],
	[ "LD D,n", "7", "8", "2", "16 n", "2" , "", "D := n"],
	[ "LD D,r", "4", "5", "1", "50+r", "1" , "", "D := r"],
	[ "LD DE,(nn)", "20", "22", "4", "ED 5B nn nn", "4" , "", "DE := (nn)"],
	[ "LD DE,nn", "10", "11", "3", "11 nn nn", "3" , "", "DE := nn"],
	[ "LD E,(HL)", "7", "8", "2", "5E", "1" , "", "E := (HL)"],
	[ "LD E,(IX+o)", "19", "21", "5", "DD 5E o", "3" , "", "E := (IX+o)"],
	[ "LD E,(IY+o)", "19", "21", "5", "FD 5E o", "3" , "", "E := (IY+o)"],
	["LD E,IXh", "8", "10", "2", "DD 58+p", "2", "", "E := IXh"],
	["LD E,IXl", "8", "10", "2", "DD 58+p", "2", "", "E := IXl"],
	["LD E,IYh", "8", "10", "2", "FD 58+q", "2", "", "E := IYh"],
	["LD E,IYl", "8", "10", "2", "FD 58+q", "2", "", "E := IYl"],
	[ "LD E,n", "7", "8", "2", "1E n", "2" , "", "E := n"],
	[ "LD E,r", "4", "5", "1", "58+r", "1" , "", "E := r"],
	[ "LD H,(HL)", "7", "8", "2", "66", "1" , "", "H := (HL)"],
	[ "LD H,(IX+o)", "19", "21", "5", "DD 66 o", "3" , "", "H := (IX+o)"],
	[ "LD H,(IY+o)", "19", "21", "5", "FD 66 o", "3" , "", "H := (IY+o)"],
	[ "LD H,n", "7", "8", "2", "26 n", "2" , "", "H := n"],
	[ "LD H,r", "4", "5", "1", "60+r", "1" , "", "H := r"],
	[ "LD HL,(nn)", "16", "17", "5", "2A nn nn", "5" , "", "HL := (nn)"],
	[ "LD HL,nn", "10", "11", "3", "21 nn nn", "3" , "", "HL := nn"],
	[ "LD I,A", "9", "11", "3", "ED 47", "2" , "", "I := A"],
	[ "LD IX,(nn)", "20", "22", "6", "DD 2A nn nn", "4" , "", "IX := (nn)"],
	[ "LD IX,nn", "14", "16", "4", "DD 21 nn nn", "4" , "", "IX := nn"],
	[ "LD IXh,n", "11", "13", "4", "DD 26 n", "2" , "", "IXh := n"],
	[ "LD IXh,p", "8", "10", "3", "DD 60+p", "2" , "", "IXh := p"],
	[ "LD IXl,n", "11", "13", "4", "DD 2E n", "2" , "", "IXl := n"],
	[ "LD IXl,p", "8", "10", "3", "DD 68+p", "2" , "", "IXl := p"],
	[ "LD IY,(nn)", "20", "22", "6", "FD 2A nn nn", "4" , "", "IY := (nn)"],
	[ "LD IY,nn", "14", "16", "4", "FD 21 nn nn", "4" , "", "IY := nn"],
	[ "LD IYh,n", "11", "13", "3", "FD 26 n", "2" , "", "IYh := n"],
	[ "LD IYh,q", "8", "10", "3", "FD 60+q", "2" , "", "IYh := q"],
	[ "LD IYl,n", "11", "13", "4", "FD 2E n", "2" , "", "IYl := n"],
	[ "LD IYl,q", "8", "10", "3", "FD 68+q", "2" , "", "IYl := q"],
	[ "LD L,(HL)", "7", "8", "2", "6E", "1" , "", "L := (HL)"],
	[ "LD L,(IX+o)", "19", "21", "5", "DD 6E o", "3" , "", "L := (IX+o)"],
	[ "LD L,(IY+o)", "19", "21", "5", "FD 6E o", "3" , "", "L := (IY+o)"],
	[ "LD L,n", "7", "8", "2", "2E n", "2" , "", "L := n"],
	[ "LD L,r", "4", "5", "1", "68+r", "1" , "", "L := r"],
	[ "LD R,A", "9", "11", "3", "ED 4F", "2" , "", "R := A"],
	[ "LD SP,(nn)", "20", "22", "6", "ED 7B nn nn", "4" , "", "SP := (nn)"],
	[ "LD SP,HL", "6", "7", "2", "F9", "1" , "", "SP := HL"],
	[ "LD SP,IX", "10", "12", "3", "DD F9", "2" , "", "SP := IX"],
	[ "LD SP,IY", "10", "12", "3", "FD F9", "2" , "", "SP := IY"],
	[ "LD SP,nn", "10", "11", "3", "31 nn nn", "3" , "", "SP := nn"],
	["LDD", "16", "18", "5", "ED A8", "2", "--0*0-", "[DE] := [HL], HL = HL-1, DE = DE-1, BC = BC-1" ],
	["LDDR", "21/16", "23/18", "6/5", "ED B8", "2", "--000-", "LDD until BC == 0" ],
	["LDI", "16", "18", "5", "ED A0", "2", "--0*0-", "[DE] := [HL], HL = HL+1, DE = DE+1, BC = BC-1" ],
	["LDIR", "21/16", "23/18", "6/5", "ED B0", "2", "--000-", "LDI until BC == 0"  ],
	["NEG", "8", "10", "2", "ED 44", "2", "***V1*", "A := -A" ],
	[ "NOP", "4", "5", "1", "0", "1", "", "No operation" ],
	["OR (HL)", "7", "8", "2", "B6", "1", "***P00", "A := A|[HL]" ],
	["OR (IX+o)", "19", "21", "3", "DD B6 o", "3", "***P00", "A := A|[IX+o]" ],
	["OR (IY+o)", "19", "21", "3", "FD B6 o", "3", "***P00", "A := A|[IY+o]" ],
	["OR IXh", "8", "10", "2", "DD B4", "2", "***P00", "A := A|IXh"],
	["OR IXl", "8", "10", "2", "DD B5", "2", "***P00", "A := A|IXl"],
	["OR IYh", "8", "10", "2", "FD B4", "2", "***P00", "A := A|IYh"],
	["OR IYl", "8", "10", "2", "FD B5", "2", "***P00", "A := A|IYl"],
	["OR n", "7", "8", "2", "F6 n", "2", "***P00", "A := A|n" ],
	["OR r", "4", "5", "1", "B0+r", "1", "***P00", "A := A|r" ],
	["OTDR", "21/16", "23/18", "6/5", "ED BB", "2", "01*?1-", "OUTD until B=0" ],
	["OTIR", "21/16", "23/18", "6/5", "ED B3", "2", "01*?1-", "OUTD until B=0"  ],
	[ "OUT (C),0", "12", "14", "4", "ED 71", "2", "", "port[BC] := 0 (undocumented)" ],
	["OUT (C),A", "12", "14", "4", "ED 79", "2", "", "port[BC] := A" ],
	["OUT (C),B", "12", "14", "4", "ED 41", "2", "", "port[BC] := B" ],
	["OUT (C),C", "12", "14", "4", "ED 49", "2", "", "port[BC] := C" ],
	["OUT (C),D", "12", "14", "4", "ED 51", "2", "", "port[BC] := D" ],
	["OUT (C),E", "12", "14", "4", "ED 59", "2", "", "port[BC] := E" ],
	["OUT (C),H", "12", "14", "4", "ED 61", "2", "", "port[BC] := H" ],
	["OUT (C),L", "12", "14", "4", "ED 69", "2", "", "port[BC] := L" ],
	["OUT (n),A", "11", "12", "4", "D3 n", "2", "", "port[An] := A" ],
	["OUTD", "16", "18", "5", "ED AB", "2", "?*??1-", "port[BC] := [HL], HL := HL-1, B := B-1" ],
	["OUTI", "16", "18", "5", "ED A3", "2", "?*??1-", "port[BC] := [HL], HL := HL+1, B := B-1"],
	["POP AF", "10", "11", "3", "F1", "1", "******", "F := [SP], SP := SP+1, A := [SP], SP := SP+1" ],
	["POP BC", "10", "11", "3", "C1", "1", "", "C := [SP], SP := SP+1, B := [SP], SP := SP+1" ],
	["POP DE", "10", "11", "3", "D1", "1", "", "E := [SP], SP := SP+1, D := [SP], SP := SP+1" ],
	["POP HL", "10", "11", "3", "E1", "1", "", "L := [SP], SP := SP+1, H := [SP], SP := SP+1" ],
	["POP IX", "14", "16", "4", "DD E1", "2", "", "IXl := [SP], SP := SP+1, IXh := [SP], SP := SP+1" ],
	["POP IY", "14", "16", "4", "FD E1", "2", "", "IYl := [SP], SP := SP+1, IYh := [SP], SP := SP+1" ],
	["PUSH AF", "11", "12", "4", "F5", "1", "", "SP := SP-1, [SP] := A, SP := SP-1, [SP] := F" ],
	["PUSH BC", "11", "12", "4", "C5", "1", "", "SP := SP-1, [SP] := B, SP := SP-1, [SP] := C" ],
	["PUSH DE", "11", "12", "4", "D5", "1", "", "SP := SP-1, [SP] := D, SP := SP-1, [SP] := E" ],
	["PUSH HL", "11", "12", "4", "E5", "1", "", "SP := SP-1, [SP] := H, SP := SP-1, [SP] := L" ],
	["PUSH IX", "15", "17", "5", "DD E5", "2", "", "SP := SP-1, [SP] := IXh, SP := SP-1, [SP] := IXl" ],
	["PUSH IY", "15", "17", "5", "FD E5", "2", "", "SP := SP-1, [SP] := IYh, SP := SP-1, [SP] := IYl" ],
	["RES b,(HL)", "15", "17", "4", "CB 86+8*b", "2", "", "[HL].b := 0" ],
	["RES b,(IX+o)", "23", "25", "7", "DD CB o 86+8*b", "4", "", "[IX+o].b := 0" ],
	["RES b,(IY+o)", "23", "25", "7", "FD CB o 86+8*b", "4", "", "[IY+o].b := 0" ],
	["RES b,r", "8", "10", "2", "CB 80+8*b+r", "2", "", "r.b := 0" ],
	["RET", "10", "11", "3", "C9", "1", "", "Return from subroutine, PC := [SP,SP+1], SP := SP+2" ],
	["RET C", "11/5", "12/6", "4/2", "D8", "1", "", "Return from subroutine, if CY then PC := [SP,SP+1], SP := SP+2"],
	["RET M", "11/5", "12/6", "4/2", "F8", "1", "", "Return from subroutine, if sign negative then PC := [SP,SP+1], SP := SP+2"],
	["RET NC", "11/5", "12/6", "4/2", "D0", "1", "", "Return from subroutine, if Non-CY then PC := [SP,SP+1], SP := SP+2" ],
	["RET NZ", "11/5", "12/6", "4/2", "C0", "1", "", "Return from subroutine, if Non-Zero then PC := [SP,SP+1], SP := SP+2" ],
	["RET P", "11/5", "12/6", "4/2", "F0", "1", "", "Return from subroutine, if sign positive then PC := [SP,SP+1], SP := SP+2" ],
	["RET PE", "11/5", "12/6", "4/2", "E8", "1", "", "Return from subroutine, if parity even then PC := [SP,SP+1], SP := SP+2" ],
	["RET PO", "11/5", "12/6", "4/2", "E0", "1", "", "Return from subroutine, if parity odd then PC := [SP,SP+1], SP := SP+2" ],
	["RET Z", "11/5", "12/6", "4/2", "C8", "1", "", "Return from subroutine, if Zero then PC := [SP,SP+1], SP := SP+2" ],
	["RETI", "14", "16", "4", "ED 4D", "2", "", "Return from ISR (interrupt service routine), PC := [SP,SP+1], SP := SP+2" ],
	["RETN", "14", "16", "4", "ED 45", "2", "Return from NMI (non maskable interrupt), PC := [SP,SP+1], SP := SP+2" ],
	["RL (HL)", "15", "17", "4", "CB 16", "2", "**0P0*", "Rotate [HL] through CY, CY<7<6<5<4<3<2<1<0<CY" ],
	["RL (IX+o)", "23", "25", "7", "DD CB o 16", "4", "**0P0*", "Rotate [IX+o] through CY, CY<7<6<5<4<3<2<1<0<CY" ],
	["RL (IY+o)", "23", "25", "7", "FD CB o 16", "4", "**0P0*", "Rotate [IY+o] through CY, CY<7<6<5<4<3<2<1<0<CY" ],
	["RL r", "8", "10", "2", "CB 10+r", "2", "**0P0*", "Rotate r through CY, CY<7<6<5<4<3<2<1<0<CY" ],
	["RLA", "4", "5", "1", "17", "1", "--0-0*", "Rotate A through CY, CY<7<6<5<4<3<2<1<0<CY" ],
	["RLC (HL)", "15", "17", "4", "CB 06", "2", "**0P0*", "Rotate [HL] with CY, CY<7<6<5<4<3<2<1<0<7" ],
	["RLC (IX+o)", "23", "25", "7", "DD CB o 06", "4", "**0P0*", "Rotate [IX+o] with CY, CY<7<6<5<4<3<2<1<0<7" ],
	["RLC (IY+o)", "23", "25", "7", "FD CB o 06", "4", "**0P0*", "Rotate [IY+o] with CY, CY<7<6<5<4<3<2<1<0<7" ],
	["RLC r", "8", "10", "2", "CB 00+r", "2", "**0P0*", "Rotate r with CY, CY<7<6<5<4<3<2<1<0<7" ],
	["RLCA", "4", "5", "1", "07", "1", "--0-0*", "Rotate [HL] with CY, CY<7<6<5<4<3<2<1<0<7" ],
	["RLD", "18", "20", "5", "ED 6F", "2", "**0P0-", "A.0-3 := [HL].4-7, [HL].4-7 := [HL].0-3, [HL].0-3 := A.0-3" ],
	[ "RR (HL)", "15", "17", "4", "CB 1E", "2" ],
	[ "RR (IX+o)", "23", "25", "7", "DD CB o 1E", "4" ],
	[ "RR (IY+o)", "23", "25", "7", "FD CB o 1E", "4" ],
	[ "RR r", "8", "10", "2", "CB 18+r", "2" ],
	[ "RRA", "4", "5", "1", "1F", "1" ],
	[ "RRC (HL)", "15", "17", "4", "CB 0E", "2" ],
	[ "RRC (IX+o)", "23", "25", "7", "DD CB o 0E", "4" ],
	[ "RRC (IY+o)", "23", "25", "7", "FD CB o 0E", "4" ],
	[ "RRC r", "8", "10", "2", "CB 08+r", "2" ],
	[ "RRCA", "4", "5", "1", "0F", "1" ],
	[ "RRD", "18", "20", "5", "ED 67", "2" ],
	[ "RST 0", "11", "12", "4", "C7", "1" ],
	[ "RST 8H", "11", "12", "4", "CF", "1" ],
	[ "RST 10H", "11", "12", "4", "D7", "1" ],
	[ "RST 18H", "11", "12", "4", "DF", "1" ],
	[ "RST 20H", "11", "12", "4", "E7", "1" ],
	[ "RST 28H", "11", "12", "4", "EF", "1" ],
	[ "RST 30H", "11", "12", "4", "F7", "1" ],
	[ "RST 38H", "11", "12", "4", "FF", "1" ],
	[ "SBC A,(HL)", "7", "8", "2", "9E", "1" ],
	[ "SBC A,(IX+o)", "19", "21", "3", "DD 9E o", "3" ],
	[ "SBC A,(IY+o)", "19", "21", "3", "FD 9E o", "3" ],
	["SBC A,IXh", "8", "10", "2", "DD 9C", "2"],
	["SBC A,IXl", "8", "10", "2", "DD 9D", "2"],
	["SBC A,IYh", "8", "10", "2", "FD 9C", "2"],
	["SBC A,IYl", "8", "10", "2", "FD 9D", "2"],
	[ "SBC A,n", "7", "8", "2", "DE n", "2" ],
	[ "SBC A,r", "4", "5", "1", "98+r", "1" ],
	[ "SBC HL,BC", "15", "17", "4", "ED 42", "2" ],
	[ "SBC HL,DE", "15", "17", "4", "ED 52", "2" ],
	[ "SBC HL,HL", "15", "17", "4", "ED 62", "2" ],
	[ "SBC HL,SP", "15", "17", "4", "ED 72", "2" ],
	[ "SCF", "4", "5", "1", "37", "1" ],
	["SET b,(HL)", "15", "17", "4", "CB C6+8*b", "2", "", "[HL].b := 0" ],
	["SET b,(IX+o)", "23", "25", "7", "DD CB o C6+8*b", "4", "", "[IX+o].b := 1" ],
	["SET b,(IY+o)", "23", "25", "7", "FD CB o C6+8*b", "4", "", "[IY+o].b := 1" ],
	["SET b,r", "8", "10", "2", "CB C0+8*b+r", "2", "", "r.b := 1" ],
	[ "SL1 (HL)", "15", "17", "4", "CB 36", "2" ], // alt. SLL (HL)
	[ "SL1 (IX+o)", "23", "25", "7", "DD CB o 36", "4" ], // alt. SLL (IX+o)
	[ "SL1 (IY+o)", "23", "25", "7", "FD CB o 36", "4" ], // alt. SLL (IY+o)
	[ "SL1 r", "8", "10", "2", "CB 30+r", "2" ], // alt. SLL r
	[ "SLA (HL)", "15", "17", "4", "CB 26", "2" ],
	[ "SLA (IX+o)", "23", "25", "7", "DD CB o 26", "4" ],
	[ "SLA (IY+o)", "23", "25", "7", "FD CB o 26", "4" ],
	[ "SLA r", "8", "10", "2", "CB 20+r", "2" ],
	[ "SLL (HL)", "15", "17", "4", "CB 36", "2" ], // alt. SL1 (HL)
	[ "SLL (IX+o)", "23", "25", "7", "DD CB o 36", "4" ], // alt. SL1 (IX+o)
	[ "SLL (IY+o)", "23", "25", "7", "FD CB o 36", "4" ], // alt. SL1 (IY+o)
	[ "SLL r", "8", "10", "2", "CB 30+r", "2" ], // alt. SL1 r
	[ "SRA (HL)", "15", "17", "4", "CB 2E", "2" ],
	[ "SRA (IX+o)", "23", "25", "7", "DD CB o 2E", "4" ],
	[ "SRA (IY+o)", "23", "25", "7", "FD CB o 2E", "4" ],
	[ "SRA r", "8", "10", "2", "CB 28+r", "2" ],
	[ "SRL (HL)", "15", "17", "4", "CB 3E", "2" ],
	[ "SRL (IX+o)", "23", "25", "7", "DD CB o 3E", "4" ],
	[ "SRL (IY+o)", "23", "25", "7", "FD CB o 3E", "4" ],
	[ "SRL r", "8", "10", "2", "CB 38+r", "2" ],
	[ "SUB (HL)", "7", "8", "2", "96", "1" ],
	[ "SUB (IX+o)", "19", "21", "7", "DD 96 o", "3" ],
	[ "SUB (IY+o)", "19", "21", "7", "FD 96 o", "3" ],
	["SUB IXh", "8", "10", "2", "DD 94", "2"],
	["SUB IXl", "8", "10", "2", "DD 95", "2"],
	["SUB IYh", "8", "10", "2", "FD 94", "2"],
	["SUB IYl", "8", "10", "2", "FD 95", "2"],
	[ "SUB n", "7", "8", "2", "D6 n", "2" ],
	[ "SUB r", "4", "5", "1", "90+r", "1" ],
	[ "XOR (HL)", "7", "8", "2", "AE", "1" ],
	[ "XOR (IX+o)", "19", "21", "3", "DD AE o", "3" ],
	[ "XOR (IY+o)", "19", "21", "3", "FD AE o", "3" ],
	["XOR IXh", "8", "10", "2", "DD AC", "2"],
	["XOR IXl", "8", "10", "2", "DD AD", "2"],
	["XOR IYh", "8", "10", "2", "FD AC", "2"],
	["XOR IYl", "8", "10", "2", "FD AD", "2"],
	[ "XOR n", "7", "8", "2", "EE n", "2" ],
	[ "XOR r", "4", "5", "1", "A8+r", "1"],

	// Z80N
	["LDIX", "16", "", "", "ED A4", ""],
	["LDWS", "14", "", "", "ED A5", ""],
	["LDIRX", "21/16", "", "", "ED B4", ""],
	["LDDX", "16", "", "", "ED AC", ""],
	["LDDRX", "21/16", "", "", "ED BC", ""],
	["LDPIRX", "21/16", "", "", "ED B7", ""],
	["OUTINB", "16", "", "", "ED 90", ""],
	["MUL D,E", "8", "", "", "ED 30", ""],
	["ADD HL,A", "8", "", "", "ED 31", ""],
	["ADD DE,A", "8", "", "", "ED 32", ""],
	["ADD BC,A", "8", "", "", "ED 33", ""],
	["ADD HL,nn", "6", "", "", "ED 34 nn nn", ""],
	["ADD DE,nn", "16", "", "", "ED 35 nn nn", ""],
	["ADD BC,nn", "16", "", "", "ED 36 nn nn", ""],
	["SWAPNIB", "8", "", "", "ED 23", ""],
	["MIRROR", "8", "", "", "ED 24", ""],
	["PUSH nn", "23", "", "", "ED 8A nn.h nn.l", ""],
	["NEXTREG r,n", "20", "", "", "ED 91 r n", ""],
	["NEXTREG r,A", "17", "", "", "ED 92 r", ""],
	["PIXELDN", "8", "", "", "ED 93", ""],
	["PIXELAD", "8", "", "", "ED 94", ""],
	["SETAE", "8", "", "", "ED 95", ""],
	["TEST n", "11", "", "", "ED 27 n", ""],

	["BSLA DE,B", "8", "", "", "ED 28", ""],
	["BSRA DE,B", "8", "", "", "ED 29", ""],
	["BSRL DE,B", "8", "", "", "ED 2A", ""],
	["BSRF DE,B", "8", "", "", "ED 2B", ""],
	["BRLC DE,B", "8", "", "", "ED 2C", ""],
	["JP (C)", "13", "", "", "ED 98", ""],
];

// TODO: undocumented kennzeichnen
