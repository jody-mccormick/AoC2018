import { index } from "./days";
import { getData } from "./getData";

const day = process.argv.slice(2)[0];
const part = process.argv.slice(2)[1];

const fun = (d, p) => {
    
    return getData(day).then(dat => {

        const f = index[d][p];
    
        return f(dat);

    });

};

fun(day, part).then(console.log);