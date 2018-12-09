const part1 = inputData => {

    const ids = inputData.split('\n').filter(id => id && id.length > 0);
    const idsLen = ids.length;

    let twos: number = 0;
    let threes: number = 0;
    let id: string;
    let idLen: number;
    let chars: object;

    for(let i = 0; i < idsLen; i++) {
        id = ids[i];
        idLen = id.length;
        chars = {};

        for(let j = 0; j < idLen; j++) {
            chars[id[j]] = chars[id[j]] ? chars[id[j]] + 1 : 1;
        }

        let countsForTwos: boolean = false;
        let countsForThrees: boolean = false;
        for(let k in chars) {
            if(!countsForTwos && chars[k] === 2) {
                countsForTwos = true;
                twos++
            }
            if(!countsForThrees && chars[k] === 3) {
                countsForThrees = true;
                threes++
            }
        }
    }

    return twos * threes;
};

const part2 = inputData => {

    const ids = inputData.split('\n').filter(id => id && id.length > 0);
    const idsLen = ids.length;

    let similarIds: Array<any> = [];

    for(let i = 0; i < idsLen - 1; i++) {
        let testId = ids[i];
        for(let k = i + 1; k < idsLen; k++) {
            let compareId = ids[k];
            let diffCount = 0;
            let commonLetters = '';
            for(let j = 0; j < testId.length; j++) {
                if(testId[j] !== compareId[j]) {
                    diffCount++;
                } else {
                    commonLetters += testId[j]
                }
            }
            if(diffCount === 1) {
                similarIds.push({
                    a: testId,
                    b: compareId,
                    cL: commonLetters
                })
            }
        }
    }

    return similarIds.length > 1 ? `More than one pair of similar ids found: ${similarIds}` : similarIds[0].cL;
    
};

export const day2 = {
    part1: part1,
    part2: part2
};