import * as assert from 'assert';
import { z80InstructionSetRawData } from '../src/z80InstructionSetRawData';


suite('Z80InstructionSet', () => {

	test('InstructionsComplete', () => {
		// Check count
		assert.notEqual(0, z80InstructionSetRawData.length);

		// Get array
		const arr = z80InstructionSetRawData;

		// Loop over all instructions
		for (const instr of arr) {
			const name = (instr.length > 0) ? instr[0] : 'Unknown';
			// Check number of entries in instruction
			assert.equal(8, instr.length, "'" + name + "': Wrong number of fields");
			// Get all required fields:
			const tStates = instr[1];
			const flags = instr[6];
			const description = instr[7];
			// Check
			assert.notEqual(0, name.length, "Mnemonic is empty");
			// T-states
			assert.notEqual(0, tStates.length, "'" + name + "': No T-states");
			const m1 = /^[0-9]+$/.exec(tStates);
			const m2 = /^[0-9]+\/[0-9]+$/.exec(tStates);
			assert.ok(m1 != null || m2 != null, "'" + name + "', '" + flags + "'T-state string wrong");
			// Flags
			assert.ok(0 == flags.length || 6 == flags.length);
			const mf = /[^-\*\?VP01]/.exec(flags);
			assert.equal(null, mf, "'" + name + "', '" + flags + "': Unexpected character");
			// Description
			assert.notEqual(0, description.length, "'" + name + "': No description");
		}

	});

});