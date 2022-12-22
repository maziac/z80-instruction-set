import {strict as assert} from 'assert';
import {Z80Instruction} from '../src/z80instruction';


describe('z80Instruction', () => {
    const instr = new Z80Instruction( 'example' ,'','','','','','','') as any;

    describe('parseValue', () => {
        test('NaN', () => {
            let res = instr.parseValue('XYZ');
            assert.ok(isNaN(res));
            res = instr.parseValue('');
            assert.ok(isNaN(res));
            res = instr.parseValue('-5');
            assert.ok(isNaN(res));
        });

        test('decimal', () => {
            let res = instr.parseValue('0');
            assert.equal(0, res);
            res = instr.parseValue('19');
            assert.equal(19, res);
        });

        test('Hex', () => {
            let res = instr.parseValue('0x1234');
            assert.equal(4660, res);
            res = instr.parseValue('$1234');
            assert.equal(4660, res);
            res = instr.parseValue('1234h');
            assert.equal(4660, res);
            res = instr.parseValue('1234H');
            assert.equal(4660, res);
        });
    });

    describe('compareNumbers', () => {
        test('NaN', () => {
            let res = instr.compareNumbers('0', '');
            assert.ok(res == false);
            res = instr.compareNumbers('', '1');
            assert.ok(res == false);
            res = instr.compareNumbers('', '');
            assert.ok(res == false);
        });

        test('decimal/decimal', () => {
            let res = instr.compareNumbers('0', '0');
            assert.ok(res);
            res = instr.compareNumbers('0', '1');
            assert.ok(res == false);
        });

        test('hex/hex', () => {
            let res = instr.compareNumbers('0x12', '0x12');
            assert.ok(res);
            res = instr.compareNumbers('0x12', '0x13');
            assert.ok(res == false);
            res = instr.compareNumbers('$AF', '0AFh');
            assert.ok(res);
            res = instr.compareNumbers('0xAF', '0AFH');
            assert.ok(res);
            res = instr.compareNumbers('0xAF', 'AFH');
            assert.ok(res == false);
        });

        test('hex/dec', () => {
            let res = instr.compareNumbers('0x12', '18');
            assert.ok(res);
            res = instr.compareNumbers('0x12', '19');
            assert.ok(res == false);
        });
    });

});