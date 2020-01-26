const part1 = inputData => {
    const wire1 = inputData.slice(0, inputData.indexOf('\n')).split(',');
    const wire2 = inputData.slice(inputData.indexOf('\n') + 1).split(',');
    return [wire1,wire2]
};

const part2 = inputData => {};

export const day3 = {
    part1: part1,
    part2: part2
}