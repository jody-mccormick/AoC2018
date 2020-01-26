import { index } from "./2019/index";
import { getData } from "./getData";

const year = process.argv.slice(2)[0];
const day = process.argv.slice(2)[1];
const part = process.argv.slice(2)[2];

const fun = (d, p) => {
    return getData(year,day).then(dat => {

        const f = index[d][p];
    
        return f(dat);

    });

};

fun(day, part).then(console.log);