const part1 = inputData => {

    const values = inputData.split('\n');

    const outputVal = values.reduce((a, b) => {
        return Number(a) + Number(b)
    });

    return outputVal;
;};

const part2 = inputData => {
    
    const values = inputData.split('\n').map(val => Number(val)).filter(val => val !== 0);
    let valuesLen = values.length;

    let seenFreqs: Array<number> = [];

    for(let i = 0, j = 0, k = 0; i < 10e6; i++, j = (j + 1) % valuesLen) {
        if(seenFreqs.indexOf(k) === -1) {
            seenFreqs.push(k);
            k += values[j];
        } else {
            return k;
        }
    };

    return 'No repeat found.';

};

export const day1 = {
    part1: part1,
    part2: part2
};