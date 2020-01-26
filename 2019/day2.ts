const part1 = inputData => {
    const dat: Array<number> = inputData.split(',').filter(d => d.length).map(Number);
    return opcode_reader(dat, 12, 2);

};

const part2 = async inputData => {
    const dat: Array<number> = inputData.split(',').filter(d => d.length).map(Number);
    for(let i = 0; i < 100; i++) {
        for(let j = 0; j < 100; j++) {
            const res = opcode_reader(dat.concat([]), i, j);
            if(res === 19690720) {
                return 100 * i + j;
            }
        }
    }
};

export const day2 = {
    part1: part1,
    part2: part2
}

function opcode_reader(opcodes: number[], noun: number, verb: number): number {
    opcodes[1] = noun;
    opcodes[2] = verb;
	let pos = 0
	while(true) {
        const cmd = opcodes[pos];
		if (cmd == 99) {
			break
        }
        
        const p1 = opcodes[opcodes[pos+1]];
        const p2 = opcodes[opcodes[pos+2]];

        const v1 = p1 + p2;
        const v2 = p1 * p2;
		if (cmd == 1) {
			opcodes[opcodes[pos+3]] = v1;
		} else if (cmd == 2) {
			opcodes[opcodes[pos+3]] = v2
		}
		pos += 4
	}
    const oc = opcodes[0];
    opcodes = undefined;
	return oc
}
