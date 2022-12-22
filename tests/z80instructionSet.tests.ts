import {strict as assert} from 'assert';
import {Z80InstructionSet} from '../src/z80instructionSet';


suite('z80instructionSet', () => {
    const instr = Z80InstructionSet.instance as any;

    suite('parseInstruction', () => {

        suite('RST', () => {

            test('RST 0', () => {
                let res = instr.parseInstruction("RST 0");
                let mnem = res.getMnemonic();
                let operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("0", operand);
            });

            test('RST 8', () => {
                let res = instr.parseInstruction("RST 8");
                let mnem = res.getMnemonic();
                let operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("8H", operand);

                res = instr.parseInstruction("RST 8h");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("8H", operand);

                res = instr.parseInstruction("RST 8h");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("8H", operand);

                res = instr.parseInstruction("RST 8h");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("8H", operand);
            });

            test('RST 10H', () => {
                let res = instr.parseInstruction("RST 10H");
                let mnem = res.getMnemonic();
                let operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("10H", operand);

                res = instr.parseInstruction("RST 10h");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("10H", operand);

                res = instr.parseInstruction("RST $10");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("10H", operand);

                res = instr.parseInstruction("RST 0x10");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("10H", operand);

                res = instr.parseInstruction("RST 16");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("10H", operand);
            });

            test('RST x', () => {
                let res = instr.parseInstruction("RST 24");
                let mnem = res.getMnemonic();
                let operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("18H", operand);

                res = instr.parseInstruction("RST 32");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("20H", operand);

                res = instr.parseInstruction("RST 40");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("28H", operand);

                res = instr.parseInstruction("RST 48");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("30H", operand);

                res = instr.parseInstruction("RST 56");
                mnem = res.getMnemonic();
                operand = res.getOperands()[0];
                assert.equal("RST", mnem);
                assert.equal("38H", operand);
            });

        });
    });
});