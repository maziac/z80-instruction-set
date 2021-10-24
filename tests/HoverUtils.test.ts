import * as assert from 'assert';
import { extractInstruction, getLegend, getFlagsMdTable } from '../src/HoverUtils';


suite('HoverUtils', () => {
    suite('extractInstruction', () => {

        test('extractInstruction', () => {
            let res = extractInstruction("LD A,B", 0);
            assert.equal("LD A,B", res);

            res = extractInstruction("ld a,b", 0);
            assert.equal("LD A,B", res);

            res = extractInstruction(" ld   a , b  ", 1);
            assert.equal("LD A , B", res);

            res = extractInstruction("ld a,b", 1);
            assert.equal("LD A,B", res);

            res = extractInstruction("ld a,b", 2);
            assert.equal("LD A,B", res);

            res = extractInstruction("ld  a,b", 3);
            assert.equal("A,B", res);

            res = extractInstruction("ld a,b", 3);
            assert.equal("A,B", res);

            res = extractInstruction("  ld a,b", 2);
            assert.equal("LD A,B", res);
        });


        test('extractInstruction with label', () => {
            let res = extractInstruction("label: ld a,b", 7);
            assert.equal("LD A,B", res);

            res = extractInstruction("label:   ld a,b", 9);
            assert.equal("LD A,B", res);

            res = extractInstruction(" label:   ld a,b", 10);
            assert.equal("LD A,B", res);

            // Without ":" (sjasmplus)
            res = extractInstruction("label ld a,b", 6);
            assert.equal("LD A,B", res);

            res = extractInstruction("label   ld a,b", 8);
            assert.equal("LD A,B", res);

            res = extractInstruction(" label   ld a,b", 9);
            assert.equal("LD A,B", res);
        });


        test('extractInstruction with comment', () => {
            let res = extractInstruction("LD A,B; comment", 0);
            assert.equal("LD A,B", res);

            res = extractInstruction("ld a,b ;comment", 0);
            assert.equal("LD A,B", res);

            res = extractInstruction("ld a,b        ;comment", 0);
            assert.equal("LD A,B", res);
        });

        test('extractInstruction separated by ":"', () => {
            let res = extractInstruction("ld a,b:ld c,d:ld e,l", 0);
            assert.equal("LD A,B", res);

            res = extractInstruction("ld a,b:ld c,d:ld e,l", 7);
            assert.equal("LD C,D", res);

            res = extractInstruction("ld a,b:ld c,d:ld e,l", 14);
            assert.equal("LD E,L", res);

            res = extractInstruction("ld a,b :ld c,d:ld e,l", 8);
            assert.equal("LD C,D", res);

            res = extractInstruction("ld a,b: ld c,d:ld e,l", 8);
            assert.equal("LD C,D", res);

            res = extractInstruction("ld a,b : ld c,d:ld e,l", 9);
            assert.equal("LD C,D", res);
        });


        test('extractInstruction different instructions', () => {
            let res = extractInstruction("ld a,(IX+9)", 0);
            assert.equal("LD A,(IX+9)", res);

            res = extractInstruction("ld a,(IX)", 0);
            assert.equal("LD A,(IX)", res);

            res = extractInstruction("ex af,af'", 0);
            assert.equal("EX AF,AF'", res);

            res = extractInstruction("bit 7,(hl)", 0);
            assert.equal("BIT 7,(HL)", res);

            res = extractInstruction("bit 0,(ix-123)", 0);
            assert.equal("BIT 0,(IX-123)", res);

            res = extractInstruction("call nz,label", 0);
            assert.equal("CALL NZ,LABEL", res);

            res = extractInstruction("cpir", 0);
            assert.equal("CPIR", res);

            res = extractInstruction("djnz label", 0);
            assert.equal("DJNZ LABEL", res);

            res = extractInstruction("ex (sp),ix", 0);
            assert.equal("EX (SP),IX", res);

            res = extractInstruction("in l,(c)", 0);
            assert.equal("IN L,(C)", res);

            res = extractInstruction("inc de", 0);
            assert.equal("INC DE", res);

            res = extractInstruction("jp (hl)", 0);
            assert.equal("JP (HL)", res);

            res = extractInstruction("ld (iy+98),d", 0);
            assert.equal("LD (IY+98),D", res);

            res = extractInstruction("ld ixl,5", 0);
            assert.equal("LD IXL,5", res);

            res = extractInstruction("out (c),b", 0);
            assert.equal("OUT (C),B", res);

            res = extractInstruction("res 4,(IY-67)", 0);
            assert.equal("RES 4,(IY-67)", res);

            res = extractInstruction("rrc c", 0);
            assert.equal("RRC C", res);
        });


        test('extractInstruction Z80N instructions', () => {
            let res = extractInstruction("LDIX", 0);
            assert.equal("LDIX", res);
            res = extractInstruction("LDWS", 0);
            assert.equal("LDWS", res);
            res = extractInstruction("LDIRX", 0);
            assert.equal("LDIRX", res);
            res = extractInstruction("LDDX", 0);
            assert.equal("LDDX", res);
            res = extractInstruction("LDDRX", 0);
            assert.equal("LDDRX", res);
            res = extractInstruction("LDPIRX", 0);
            assert.equal("LDPIRX", res);
            res = extractInstruction("OUTINB", 0);
            assert.equal("OUTINB", res);
            res = extractInstruction("MUL D,E", 0);
            assert.equal("MUL D,E", res);
            res = extractInstruction("ADD HL,A", 0);
            assert.equal("ADD HL,A", res);
            res = extractInstruction("ADD DE,A", 0);
            assert.equal("ADD DE,A", res);
            res = extractInstruction("ADD BC,A", 0);
            assert.equal("ADD BC,A", res);
            res = extractInstruction("ADD HL,NUMBER", 0);
            assert.equal("ADD HL,NUMBER", res);
            res = extractInstruction("ADD DE,NUMBER", 0);
            assert.equal("ADD DE,NUMBER", res);
            res = extractInstruction("ADD BC,NUMBER", 0);
            assert.equal("ADD BC,NUMBER", res);
            res = extractInstruction("SWAPNIB", 0);
            assert.equal("SWAPNIB", res);
            res = extractInstruction("MIRROR", 0);
            assert.equal("MIRROR", res);
            res = extractInstruction("PUSH NUMBER", 0);
            assert.equal("PUSH NUMBER", res);
            res = extractInstruction("NEXTREG REG,NUM", 0);
            assert.equal("NEXTREG REG,NUM", res);
            res = extractInstruction("NEXTREG REG,A", 0);
            assert.equal("NEXTREG REG,A", res);
            res = extractInstruction("PIXELDN", 0);
            assert.equal("PIXELDN", res);
            res = extractInstruction("PIXELAD", 0);
            assert.equal("PIXELAD", res);
            res = extractInstruction("SETAE", 0);
            assert.equal("SETAE", res);
            res = extractInstruction("TEST NUM", 0);
            assert.equal("TEST NUM", res);

            res = extractInstruction("BSLA DE,B", 0);
            assert.equal("BSLA DE,B", res);
            res = extractInstruction("BSRA DE,B", 0);
            assert.equal("BSRA DE,B", res);
            res = extractInstruction("BSRL DE,B", 0);
            assert.equal("BSRL DE,B", res);
            res = extractInstruction("BSRF DE,B", 0);
            assert.equal("BSRF DE,B", res);
            res = extractInstruction("BRLC DE,B", 0);
            assert.equal("BRLC DE,B", res);
            res = extractInstruction("JP (C)", 0);
            assert.equal("JP (C)", res);
        });
    });


    suite('getLegend', () => {
        test('getLegend', () => {
            assert.equal(undefined, getLegend('LD H,D'));
            assert.equal("b=0-7 (bit)", getLegend('BIT b,(HL)'));
            assert.equal("n=0-255", getLegend('LD A,n'));
            assert.equal("r: B=0 C=1 D=2 E=3 H=4 L=5 A=7", getLegend('LD A,r'));
            assert.equal("nn=0-65535", getLegend('LD HL,(nn)'));
            assert.equal("o=-128 to 127", getLegend('CP (IX+o)'));
            assert.equal("p: B=0 C=1 D=2 E=3 IXh=4 IXl=5 A=7", getLegend('LD IXh,p'))
            assert.equal("q: B=0 C=1 D=2 E=3 IYh=4 IYl=5 A=7", getLegend('LD IYl,q'));
            assert.equal("b=0-7 (bit), o=-128 to 127", getLegend('BIT b,(IX + o)'));
       });
    });


    suite('getFlagsMdTable', () => {
        test('getFlagsMdTable', () => {
            const header = '|S|Z|H|P|N|C|\n|-|-|-|-|-|-|\n';
            assert.equal('', getFlagsMdTable(undefined));
            assert.equal(header + '|-|-|-|-|-|-|', getFlagsMdTable(''));
            assert.equal(header + '|1|2|3|4|5|6|', getFlagsMdTable('123456'));
            assert.equal(header + '|?|*|-|0|1|-|', getFlagsMdTable('?*-01-'));
            assert.equal(header + '|P|V|-|-|-|-|', getFlagsMdTable('PV----'));
        });
    });

});