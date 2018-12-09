"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const part1 = inputData => {
    const values = inputData.split('\n');
    const outputVal = values.reduce((a, b) => {
        return Number(a) + Number(b);
    });
    return outputVal;
    ;
};
const part2 = inputData => {
    const values = inputData.split('\n').map(val => Number(val)).filter(val => val !== 0);
    let valuesLen = values.length;
    let seenFreqs = [];
    for (let i = 0, j = 0, k = 0; i < 10e6; i++, j = (j + 1) % valuesLen) {
        if (seenFreqs.indexOf(k) === -1) {
            seenFreqs.push(k);
            k += values[j];
        }
        else {
            return k;
        }
    }
    ;
    return 'No repeat found.';
};
exports.day1 = {
    part1: part1,
    part2: part2
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5MS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2RheXMvZGF5MS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFO0lBRXRCLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNyQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0FBQUEsQ0FBQyxDQUFDO0FBRUgsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLEVBQUU7SUFFdEIsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDdEYsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUU5QixJQUFJLFNBQVMsR0FBa0IsRUFBRSxDQUFDO0lBRWxDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLEVBQUU7UUFDakUsSUFBRyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBRTVCLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUVsQjthQUFNO1lBQ0gsT0FBTyxDQUFDLENBQUM7U0FDWjtLQUNKO0lBQUEsQ0FBQztJQUVGLE9BQU8sa0JBQWtCLENBQUM7QUFFOUIsQ0FBQyxDQUFDO0FBRVcsUUFBQSxJQUFJLEdBQUc7SUFDaEIsS0FBSyxFQUFFLEtBQUs7SUFDWixLQUFLLEVBQUUsS0FBSztDQUNmLENBQUMifQ==