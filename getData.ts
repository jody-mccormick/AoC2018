import request = require('request');
import bluebird = require('bluebird');

export function getData(year: string, day: string): Promise<any> {

    const dayNumStr = day.substring(3);

    const options = {
        method: 'GET',
        url: `https://adventofcode.com/${year}/day/${dayNumStr}/input`,
        headers: {
            cookie: 'session=53616c7465645f5fbb719d9da4514cae40956b2e0cf148157b7d6edbfa27bc03926a6ba4e208e4d28f42d5848f5255ae'
        }
    };

    return new bluebird((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) reject(error);
            if (!response || !(Number(response.statusCode) >= 200)) console.log(`Recieved status code ${response.statusCode} from ${options['url']}`);
            const frmtBody = !body ? response.statusCode : ((typeof body == 'string') ? body : JSON.parse(body)); 
            resolve(frmtBody);
        });
    });

};