const getFuelRequired = m => {
    return Math.floor(m / 3) - 2;
};
export const part1 = inputData => {

    const masses = inputData.split('\n').filter(d => d.length).map(Number);

    const fuelRequirementsPerMass = masses.map(getFuelRequired);

    const totalFuelRequirement = fuelRequirementsPerMass.reduce((a, b) => a + b);

    return totalFuelRequirement;

}

export const part2 = inputData => {

    const dat = inputData.split('\n').filter(d => d.length).map(Number);

    const fuelPerMass = dat.map(getFuelRequired).map(fuelForFuel);

    function fuelForFuel(fm) {
        const fuelToLaunchThisFuelMass = getFuelRequired(fm);
        if(fuelToLaunchThisFuelMass > 0) {
            return fuelForFuel(fuelToLaunchThisFuelMass) + fm;
        }
        return fm;
    }

    const totalFuelRequirement = fuelPerMass.reduce((a, b) => a + b);

    return totalFuelRequirement;

}

export const day1 = {
    part1: part1,
    part2: part2
}