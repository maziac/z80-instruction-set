import * as assert from 'assert';
import { extractInstruction } from '../src/HoverUtils';


suite('HoverProvider', () => {

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

});