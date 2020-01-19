// @see http://map.grauw.nl/resources/z80instr.php
// @see http://www.cpcwiki.eu/forum/programming/rasm-z80-assembler-in-beta/

// [ Instruction, Timing Z80, Z80+M1, CPC, Opcode, Size ]
export const z80InstructionSetRawData = [
    [ "ADC A,(HL)", "7", "8", "2", "8E", "1" ],
	[ "ADC A,(IX+o)", "19", "21", "3", "DD 8E o", "3" ],
	[ "ADC A,(IY+o)", "19", "21", "3", "FD 8E o", "3" ],
	[ "ADC A,IXp", "8", "10", "2", "DD 88+p", "2" ],
	[ "ADC A,IYq", "8", "10", "2", "FD 88+q", "2" ],
	[ "ADC A,n", "7", "8", "2", "CE n", "2" ],
	[ "ADC A,r", "4", "5", "1", "88+r", "1" ],
	[ "ADC HL,BC", "15", "17", "4", "ED 4A", "2" ],
	[ "ADC HL,DE", "15", "17", "4", "ED 5A", "2" ],
	[ "ADC HL,HL", "15", "17", "4", "ED 6A", "2" ],
	[ "ADC HL,SP", "15", "17", "4", "ED 7A", "2" ],
	[ "ADD A,(HL)", "7", "8", "2", "86", "1" ],
	[ "ADD A,(IX+o)", "19", "21", "3", "DD 86 o", "3" ],
	[ "ADD A,(IY+o)", "19", "21", "3", "FD 86 o", "3" ],
	[ "ADD A,IXp", "8", "10", "2", "DD 80+p", "2" ],
	[ "ADD A,IYq", "8", "10", "2", "FD 80+q", "2" ],
	[ "ADD A,n", "7", "8", "2", "C6 n", "2" ],
	[ "ADD A,r", "4", "5", "1", "80+r", "1" ],
	[ "ADD HL,BC", "11", "12", "3", "9", "1" ],
	[ "ADD HL,DE", "11", "12", "3", "19", "1" ],
	[ "ADD HL,HL", "11", "12", "3", "29", "1" ],
	[ "ADD HL,SP", "11", "12", "3", "39", "1" ],
	[ "ADD IX,BC", "15", "17", "4", "DD 09", "2" ],
	[ "ADD IX,DE", "15", "17", "4", "DD 19", "2" ],
	[ "ADD IX,IX", "15", "17", "4", "DD 29", "2" ],
	[ "ADD IX,SP", "15", "17", "4", "DD 39", "2" ],
	[ "ADD IY,BC", "15", "17", "4", "FD 09", "2" ],
	[ "ADD IY,DE", "15", "17", "4", "FD 19", "2" ],
	[ "ADD IY,IY", "15", "17", "4", "FD 29", "2" ],
	[ "ADD IY,SP", "15", "17", "4", "FD 39", "2" ],
	[ "AND (HL)", "7", "8", "2", "A6", "1" ],
	[ "AND (IX+o)", "19", "21", "3", "DD A6 o", "3" ],
	[ "AND (IY+o)", "19", "21", "3", "FD A6 o", "3" ],
	[ "AND IXp", "8", "10", "2", "DD A0+p", "2" ],
	[ "AND IYq", "8", "10", "2", "FD A0+q", "2" ],
	[ "AND n", "7", "8", "2", "E6 n", "2" ],
	[ "AND r", "4", "5", "1", "A0+r", "1" ],
	[ "BIT b,(HL)", "12", "14", "3", "CB 46+8*b", "2" ],
	[ "BIT b,(IX+o)", "20", "22", "6", "DD CB o 46+8*b", "4" ],
	[ "BIT b,(IY+o)", "20", "22", "6", "FD CB o 46+8*b", "4" ],
	[ "BIT b,r", "8", "10", "2", "CB 40+8*b+r", "2" ],
	[ "CALL C,nn", "17/10", "18/11", "5/3", "DC nn nn", "3" ],
	[ "CALL M,nn", "17/10", "18/11", "5/3", "FC nn nn", "3" ],
	[ "CALL NC,nn", "17/10", "18/11", "5/3", "D4 nn nn", "3" ],
	[ "CALL nn", "17", "18", "5", "CD nn nn", "3" ],
	[ "CALL NZ,nn", "17/10", "18/11", "5/3", "C4 nn nn", "3" ],
	[ "CALL P,nn", "17/10", "18/11", "5/3", "F4 nn nn", "3" ],
	[ "CALL PE,nn", "17/10", "18/11", "5/3", "EC nn nn", "3" ],
	[ "CALL PO,nn", "17/10", "18/11", "5/3", "E4 nn nn", "3" ],
	[ "CALL Z,nn", "17/10", "18/11", "5/3", "CC nn nn", "3" ],
	[ "CCF", "4", "5", "1", "3F", "1" ],
	[ "CP (HL)", "7", "8", "2", "BE", "1" ],
	[ "CP (IX+o)", "19", "21", "3", "DD BE o", "3" ],
	[ "CP (IY+o)", "19", "21", "3", "FD BE o", "3" ],
	[ "CP IXp", "8", "10", "2", "DD B8+p", "2" ],
	[ "CP IYq", "8", "10", "2", "FD B8+q", "2" ],
	[ "CP n", "7", "8", "2", "FE n", "2" ],
	[ "CP r", "4", "5", "1", "B8+r", "1" ],
	[ "CPD", "16", "18", "4", "ED A9", "2" ],
	[ "CPDR", "21/16", "23/18", "6/4", "ED B9", "2" ],
	[ "CPI", "16", "18", "4", "ED A1", "2" ],
	[ "CPIR", "21/16", "23/18", "6/4", "ED B1", "2" ],
	[ "CPL", "4", "5", "1", "2F", "1" ],
	[ "DAA", "4", "5", "1", "27", "1" ],
	[ "DEC (HL)", "11", "12", "3", "35", "1" ],
	[ "DEC (IX+o)", "23", "25", "6", "DD 35 o", "3" ],
	[ "DEC (IY+o)", "23", "25", "6", "FD 35 o", "3" ],
	[ "DEC A", "4", "5", "1", "3D", "1" ],
	[ "DEC B", "4", "5", "1", "5", "1" ],
	[ "DEC BC", "6", "7", "2", "0B", "1" ],
	[ "DEC C", "4", "5", "1", "0D", "1" ],
	[ "DEC D", "4", "5", "1", "15", "1" ],
	[ "DEC DE", "6", "7", "2", "1B", "1" ],
	[ "DEC E", "4", "5", "1", "1D", "1" ],
	[ "DEC H", "4", "5", "1", "25", "1" ],
	[ "DEC HL", "6", "7", "2", "2B", "1" ],
	[ "DEC IX", "10", "12", "3", "DD 2B", "2" ],
	[ "DEC IXp", "8", "10", "2", "DD 05+8*p", "2" ],
	[ "DEC IY", "10", "12", "3", "FD 2B", "2" ],
	[ "DEC IYq", "8", "10", "2", "FD 05+8*q", "2" ],
	[ "DEC L", "4", "5", "1", "2D", "2" ],
	[ "DEC SP", "6", "7", "2", "3B", "1" ],
	[ "DI", "4", "5", "1", "F3", "1" ],
	[ "DJNZ o", "13/8", "14/9", "4/3", "10 o", "2" ],
	[ "EI", "4", "5", "1", "FB", "1" ],
	[ "EX (SP),HL", "19", "20", "6", "E3", "1" ],
	[ "EX (SP),IX", "23", "25", "7", "DD E3", "2" ],
	[ "EX (SP),IY", "23", "25", "7", "FD E3", "2" ],
	[ "EX AF,AF'", "4", "5", "1", "8", "1" ],
	[ "EX DE,HL", "4", "5", "1", "EB", "1" ],
	[ "EXX", "4", "5", "1", "D9", "1" ],
	[ "HALT", "4", "5", "1", "76", "1" ],
	[ "IM 0", "8", "10", "2", "ED 46", "2" ],
	[ "IM 1", "8", "10", "2", "ED 56", "2" ],
	[ "IM 2", "8", "10", "2", "ED 5E", "2" ],
	[ "IN (C)", "12", "14", "4", "ED 70", "3" ], // alt. IN F,(C)
	[ "IN A,(C)", "12", "14", "3", "ED 78", "2" ],
	[ "IN A,(n)", "11", "12", "3", "DB n", "2" ],
	[ "IN B,(C)", "12", "14", "4", "ED 40", "2" ],
	[ "IN C,(C)", "12", "14", "4", "ED 48", "2" ],
	[ "IN D,(C)", "12", "14", "4", "ED 50", "2" ],
	[ "IN E,(C)", "12", "14", "4", "ED 58", "2" ],
	[ "IN F,(C)", "12", "14", "4", "ED 70", "3" ], // alt. IN (C)
	[ "IN H,(C)", "12", "14", "4", "ED 60", "2" ],
	[ "IN L,(C)", "12", "14", "4", "ED 68", "2" ],
	[ "INC (HL)", "11", "12", "3", "34", "1" ],
	[ "INC (IX+o)", "23", "25", "6", "DD 34 o", "3" ],
	[ "INC (IY+o)", "23", "25", "6", "FD 34 o", "3" ],
	[ "INC A", "4", "5", "1", "3C", "1" ],
	[ "INC B", "4", "5", "1", "4", "1" ],
	[ "INC BC", "6", "7", "2", "3", "1" ],
	[ "INC C", "4", "5", "1", "0C", "1" ],
	[ "INC D", "4", "5", "1", "14", "1" ],
	[ "INC DE", "6", "7", "2", "13", "1" ],
	[ "INC E", "4", "5", "1", "1C", "1" ],
	[ "INC H", "4", "5", "1", "24", "1" ],
	[ "INC HL", "6", "7", "1", "23", "1" ],
	[ "INC IX", "10", "12", "3", "DD 23", "2" ],
	[ "INC IXp", "8", "10", "2", "DD 04+8*p", "2" ],
	[ "INC IY", "10", "12", "3", "FD 23", "2" ],
	[ "INC IYq", "8", "10", "2", "FD 04+8*q", "2" ],
	[ "INC L", "4", "5", "1", "2C", "1" ],
	[ "INC SP", "6", "7", "2", "33", "1" ],
	[ "IND", "16", "18", "5", "ED AA", "2" ],
	[ "INDR", "21/16", "23/18", "6/5", "ED BA", "2" ],
	[ "INI", "16", "18", "5", "ED A2", "2" ],
	[ "INIR", "21/16", "23/18", "6/5", "ED B2", "2" ],
	[ "JP (HL)", "4", "5", "1", "E9", "1" ], // alt. JP HL
	[ "JP (IX)", "8", "10", "2", "DD E9", "2" ],
	[ "JP (IY)", "8", "10", "2", "FD E9", "2" ],
	[ "JP C,nn", "10", "11", "4/3", "DA nn nn", "3" ],
	[ "JP HL", "4", "5", "1", "E9", "1" ], // alt. JP (HL)
	[ "JP M,nn", "10", "11", "4/3", "FA nn nn", "3" ],
	[ "JP NC,nn", "10", "11", "4/3", "D2 nn nn", "3" ],
	[ "JP nn", "10", "11", "3", "C3 nn nn", "3" ],
	[ "JP NZ,nn", "10", "11", "4/3", "C2 nn nn", "3" ],
	[ "JP P,nn", "10", "11", "4/3", "F2 nn nn", "3" ],
	[ "JP PE,nn", "10", "11", "4/3", "EA nn nn", "3" ],
	[ "JP PO,nn", "10", "11", "4/3", "E2 nn nn", "3" ],
	[ "JP Z,nn", "10", "11", "4/3", "CA nn nn", "3" ],
	[ "JR C,o", "12/7", "13/8", "3/2", "38 o", "2" ],
	[ "JR NC,o", "12/7", "13/8", "3/2", "30 o", "2" ],
	[ "JR NZ,o", "12/7", "13/8", "3/2", "20 o", "2" ],
	[ "JR o", "12", "13", "3", "18 o", "2" ],
	[ "JR Z,o", "12/7", "13/8", "3/2", "28 o", "2" ],
	[ "LD (BC),A", "7", "8", "2", "2", "1" ],
	[ "LD (DE),A", "7", "8", "2", "12", "1" ],
	[ "LD (HL),n", "10", "11", "3", "36 n", "2" ],
	[ "LD (HL),r", "7", "8", "2", "70+r", "1" ],
	[ "LD (IX+o),n", "19", "21", "6", "DD 36 o n", "4" ],
	[ "LD (IX+o),r", "19", "21", "5", "DD 70+r o", "3" ],
	[ "LD (IY+o),n", "19", "21", "6", "FD 36 o n", "4" ],
	[ "LD (IY+o),r", "19", "21", "5", "FD 70+r o", "3" ],
	[ "LD (nn),A", "13", "14", "4", "32 nn nn", "3" ],
	[ "LD (nn),BC", "20", "22", "6", "ED 43 nn nn", "4" ],
	[ "LD (nn),DE", "20", "22", "6", "ED 53 nn nn", "4" ],
	[ "LD (nn),HL", "16", "17", "5", "22 nn nn", "3" ],
	[ "LD (nn),IX", "20", "22", "6", "DD 22 nn nn", "4" ],
	[ "LD (nn),IY", "20", "22", "6", "FD 22 nn nn", "4" ],
	[ "LD (nn),SP", "20", "22", "6", "ED 73 nn nn", "4" ],
	[ "LD A,(BC)", "7", "8", "2", "0A", "1" ],
	[ "LD A,(DE)", "7", "8", "2", "1A", "1" ],
	[ "LD A,(HL)", "7", "8", "2", "7E", "1" ],
	[ "LD A,(IX+o)", "19", "21", "5", "DD 7E o", "3" ],
	[ "LD A,(IY+o)", "19", "21", "5", "FD 7E o", "3" ],
	[ "LD A,(nn)", "13", "14", "4", "3A nn nn", "3" ],
	[ "LD A,I", "9", "11", "3", "ED 57", "2" ],
	[ "LD A,IXp", "8", "10", "2", "DD 78+p", "2" ],
	[ "LD A,IYq", "8", "10", "2", "FD 78+q", "2" ],
	[ "LD A,n", "7", "8", "2", "3E n", "2" ],
	[ "LD A,r", "4", "5", "1", "78+r", "1" ],
	[ "LD A,R", "9", "11", "3", "ED 5F", "2" ],
	[ "LD B,(HL)", "7", "8", "2", "46", "1" ],
	[ "LD B,(IX+o)", "19", "21", "5", "DD 46 o", "3" ],
	[ "LD B,(IY+o)", "19", "21", "5", "FD 46 o", "3" ],
	[ "LD B,IXp", "8", "10", "2", "DD 40+p", "2" ],
	[ "LD B,IYq", "8", "10", "2", "FD 40+q", "2" ],
	[ "LD B,n", "7", "8", "2", "06 n", "2" ],
	[ "LD B,r", "4", "5", "1", "40+r", "1" ],
	[ "LD BC,(nn)", "20", "22", "6", "ED 4B nn nn", "4" ],
	[ "LD BC,nn", "10", "11", "3", "01 nn nn", "3" ],
	[ "LD C,(HL)", "7", "8", "2", "4E", "1" ],
	[ "LD C,(IX+o)", "19", "21", "5", "DD 4E o", "3" ],
	[ "LD C,(IY+o)", "19", "21", "5", "FD 4E o", "3" ],
	[ "LD C,IXp", "8", "10", "2", "DD 48+p", "2" ],
	[ "LD C,IYq", "8", "10", "2", "FD 48+q", "2" ],
	[ "LD C,n", "7", "8", "2", "0E n", "2" ],
	[ "LD C,r", "4", "5", "1", "48+r", "1" ],
	[ "LD D,(HL)", "7", "8", "2", "56", "1" ],
	[ "LD D,(IX+o)", "19", "21", "5", "DD 56 o", "3" ],
	[ "LD D,(IY+o)", "19", "21", "5", "FD 56 o", "3" ],
	[ "LD D,IXp", "8", "10", "2", "DD 50+p", "2" ],
	[ "LD D,IYq", "8", "10", "2", "FD 50+q", "2" ],
	[ "LD D,n", "7", "8", "2", "16 n", "2" ],
	[ "LD D,r", "4", "5", "1", "50+r", "1" ],
	[ "LD DE,(nn)", "20", "22", "4", "ED 5B nn nn", "4" ],
	[ "LD DE,nn", "10", "11", "3", "11 nn nn", "3" ],
	[ "LD E,(HL)", "7", "8", "2", "5E", "1" ],
	[ "LD E,(IX+o)", "19", "21", "5", "DD 5E o", "3" ],
	[ "LD E,(IY+o)", "19", "21", "5", "FD 5E o", "3" ],
	[ "LD E,IXp", "8", "10", "2", "DD 58+p", "2" ],
	[ "LD E,IYq", "8", "10", "2", "FD 58+q", "2" ],
	[ "LD E,n", "7", "8", "2", "1E n", "2" ],
	[ "LD E,r", "4", "5", "1", "58+r", "1" ],
	[ "LD H,(HL)", "7", "8", "2", "66", "1" ],
	[ "LD H,(IX+o)", "19", "21", "5", "DD 66 o", "3" ],
	[ "LD H,(IY+o)", "19", "21", "5", "FD 66 o", "3" ],
	[ "LD H,n", "7", "8", "2", "26 n", "2" ],
	[ "LD H,r", "4", "5", "1", "60+r", "1" ],
	[ "LD HL,(nn)", "16", "17", "5", "2A nn nn", "5" ],
	[ "LD HL,nn", "10", "11", "3", "21 nn nn", "3" ],
	[ "LD I,A", "9", "11", "3", "ED 47", "2" ],
	[ "LD IX,(nn)", "20", "22", "6", "DD 2A nn nn", "4" ],
	[ "LD IX,nn", "14", "16", "4", "DD 21 nn nn", "4" ],
	[ "LD IXh,n", "11", "13", "4", "DD 26 n", "2" ],
	[ "LD IXh,p", "8", "10", "3", "DD 60+p", "2" ],
	[ "LD IXl,n", "11", "13", "4", "DD 2E n", "2" ],
	[ "LD IXl,p", "8", "10", "3", "DD 68+p", "2" ],
	[ "LD IY,(nn)", "20", "22", "6", "FD 2A nn nn", "4" ],
	[ "LD IY,nn", "14", "16", "4", "FD 21 nn nn", "4" ],
	[ "LD IYh,n", "11", "13", "3", "FD 26 n", "2" ],
	[ "LD IYh,q", "8", "10", "3", "FD 60+q", "2" ],
	[ "LD IYl,n", "11", "13", "4", "FD 2E n", "2" ],
	[ "LD IYl,q", "8", "10", "3", "FD 68+q", "2" ],
	[ "LD L,(HL)", "7", "8", "2", "6E", "1" ],
	[ "LD L,(IX+o)", "19", "21", "5", "DD 6E o", "3" ],
	[ "LD L,(IY+o)", "19", "21", "5", "FD 6E o", "3" ],
	[ "LD L,n", "7", "8", "2", "2E n", "2" ],
	[ "LD L,r", "4", "5", "1", "68+r", "1" ],
	[ "LD R,A", "9", "11", "3", "ED 4F", "2" ],
	[ "LD SP,(nn)", "20", "22", "6", "ED 7B nn nn", "4" ],
	[ "LD SP,HL", "6", "7", "2", "F9", "1" ],
	[ "LD SP,IX", "10", "12", "3", "DD F9", "2" ],
	[ "LD SP,IY", "10", "12", "3", "FD F9", "2" ],
	[ "LD SP,nn", "10", "11", "3", "31 nn nn", "3" ],
	[ "LDD", "16", "18", "5", "ED A8", "2" ],
	[ "LDDR", "21/16", "23/18", "6/5", "ED B8", "2" ],
	[ "LDI", "16", "18", "5", "ED A0", "2" ],
	[ "LDIR", "21/16", "23/18", "6/5", "ED B0", "2" ],
	[ "NEG", "8", "10", "2", "ED 44", "2" ],
	[ "NOP", "4", "5", "1", "0", "1" ],
	[ "OR (HL)", "7", "8", "2", "B6", "1" ],
	[ "OR (IX+o)", "19", "21", "3", "DD B6 o", "3" ],
	[ "OR (IY+o)", "19", "21", "3", "FD B6 o", "3" ],
	[ "OR IXp", "8", "10", "2", "DD B0+p", "2" ],
	[ "OR IYq", "8", "10", "2", "FD B0+q", "2" ],
	[ "OR n", "7", "8", "2", "F6 n", "2" ],
	[ "OR r", "4", "5", "1", "B0+r", "1" ],
	[ "OTDR", "21/16", "23/18", "6/5", "ED BB", "2" ],
	[ "OTIR", "21/16", "23/18", "6/5", "ED B3", "2" ],
	[ "OUT (C),0", "12", "14", "4", "ED 71", "2" ],
	[ "OUT (C),A", "12", "14", "4", "ED 79", "2" ],
	[ "OUT (C),B", "12", "14", "4", "ED 41", "2" ],
	[ "OUT (C),C", "12", "14", "4", "ED 49", "2" ],
	[ "OUT (C),D", "12", "14", "4", "ED 51", "2" ],
	[ "OUT (C),E", "12", "14", "4", "ED 59", "2" ],
	[ "OUT (C),H", "12", "14", "4", "ED 61", "2" ],
	[ "OUT (C),L", "12", "14", "4", "ED 69", "2" ],
	[ "OUT (n),A", "11", "12", "4", "D3 n", "2" ],
	[ "OUTD", "16", "18", "5", "ED AB", "2" ],
	[ "OUTI", "16", "18", "5", "ED A3", "2" ],
	[ "POP AF", "10", "11", "3", "F1", "1" ],
	[ "POP BC", "10", "11", "3", "C1", "1" ],
	[ "POP DE", "10", "11", "3", "D1", "1" ],
	[ "POP HL", "10", "11", "3", "E1", "1" ],
	[ "POP IX", "14", "16", "4", "DD E1", "2" ],
	[ "POP IY", "14", "16", "4", "FD E1", "2" ],
	[ "PUSH AF", "11", "12", "4", "F5", "1" ],
	[ "PUSH BC", "11", "12", "4", "C5", "1" ],
	[ "PUSH DE", "11", "12", "4", "D5", "1" ],
	[ "PUSH HL", "11", "12", "4", "E5", "1" ],
	[ "PUSH IX", "15", "17", "5", "DD E5", "2" ],
	[ "PUSH IY", "15", "17", "5", "FD E5", "2" ],
	[ "RES b,(HL)", "15", "17", "4", "CB 86+8*b", "2" ],
	[ "RES b,(IX+o)", "23", "25", "7", "DD CB o 86+8*b", "4" ],
	[ "RES b,(IY+o)", "23", "25", "7", "FD CB o 86+8*b", "4" ],
	[ "RES b,r", "8", "10", "2", "CB 80+8*b+r", "2" ],
	[ "RET", "10", "11", "3", "C9", "1" ],
	[ "RET C", "11/5", "12/6", "4/2", "D8", "1" ],
	[ "RET M", "11/5", "12/6", "4/2", "F8", "1" ],
	[ "RET NC", "11/5", "12/6", "4/2", "D0", "1" ],
	[ "RET NZ", "11/5", "12/6", "4/2", "C0", "1" ],
	[ "RET P", "11/5", "12/6", "4/2", "F0", "1" ],
	[ "RET PE", "11/5", "12/6", "4/2", "E8", "1" ],
	[ "RET PO", "11/5", "12/6", "4/2", "E0", "1" ],
	[ "RET Z", "11/5", "12/6", "4/2", "C8", "1" ],
	[ "RETI", "14", "16", "4", "ED 4D", "2" ],
	[ "RETN", "14", "16", "4", "ED 45", "2" ],
	[ "RL (HL)", "15", "17", "4", "CB 16", "2" ],
	[ "RL (IX+o)", "23", "25", "7", "DD CB o 16", "4" ],
	[ "RL (IY+o)", "23", "25", "7", "FD CB o 16", "4" ],
	[ "RL r", "8", "10", "2", "CB 10+r", "2" ],
	[ "RLA", "4", "5", "1", "17", "1" ],
	[ "RLC (HL)", "15", "17", "4", "CB 06", "2" ],
	[ "RLC (IX+o)", "23", "25", "7", "DD CB o 06", "4" ],
	[ "RLC (IY+o)", "23", "25", "7", "FD CB o 06", "4" ],
	[ "RLC r", "8", "10", "2", "CB 00+r", "2" ],
	[ "RLCA", "4", "5", "1", "7", "1" ],
	[ "RLD", "18", "20", "5", "ED 6F", "2" ],
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
	[ "SBC A,IXp", "8", "10", "2", "DD 98+p", "2" ],
	[ "SBC A,IYq", "8", "10", "2", "FD 98+q", "2" ],
	[ "SBC A,n", "7", "8", "2", "DE n", "2" ],
	[ "SBC A,r", "4", "5", "1", "98+r", "1" ],
	[ "SBC HL,BC", "15", "17", "4", "ED 42", "2" ],
	[ "SBC HL,DE", "15", "17", "4", "ED 52", "2" ],
	[ "SBC HL,HL", "15", "17", "4", "ED 62", "2" ],
	[ "SBC HL,SP", "15", "17", "4", "ED 72", "2" ],
	[ "SCF", "4", "5", "1", "37", "1" ],
	[ "SET b,(HL)", "15", "17", "4", "CB C6+8*b", "2" ],
	[ "SET b,(IX+o)", "23", "25", "7", "DD CB o C6+8*b", "4" ],
	[ "SET b,(IY+o)", "23", "25", "7", "FD CB o C6+8*b", "4" ],
	[ "SET b,r", "8", "10", "2", "CB C0+8*b+r", "2" ],
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
	[ "SUB IXp", "8", "10", "2", "DD 90+p", "2" ],
	[ "SUB IYq", "8", "10", "2", "FD 90+q", "2" ],
	[ "SUB n", "7", "8", "2", "D6 n", "2" ],
	[ "SUB r", "4", "5", "1", "90+r", "1" ],
	[ "XOR (HL)", "7", "8", "2", "AE", "1" ],
	[ "XOR (IX+o)", "19", "21", "3", "DD AE o", "3" ],
	[ "XOR (IY+o)", "19", "21", "3", "FD AE o", "3" ],
	[ "XOR IXp", "8", "10", "2", "DD A8+p", "2" ],
	[ "XOR IYq", "8", "10", "2", "FD A8+q", "2" ],
	[ "XOR n", "7", "8", "2", "EE n", "2" ],
	[ "XOR r", "4", "5", "1", "A8+r", "1" ]
];
