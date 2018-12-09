import request = require('request');
import bluebird = require('bluebird');

export function getData(day: string): Promise<any> {

    const dayNumStr = day.substring(3);

    const options = {
        method: 'GET',
        url: `https://adventofcode.com/2018/day/${dayNumStr}/input`,
        headers: {
            cookie: '_ga=GA1.2.593967441.1544385239; _gid=GA1.2.452745083.1544385239; session=53616c7465645f5f07836b595aa385e698b0af3e69ae7d65d2a09001979ee7733128983d7ab3a2cb6e18e41263131c9b'
        }
    };

    return new bluebird((resolve, reject) => {
        request(options, (error, response, body) => {
            if (error) reject(error);
            if (!response || !(Number(response.statusCode) >= 200 && Number(response.statusCode) < 400)) console.log(`Recieved status code ${response.statusCode} from ${options['url']}`);
            const frmtBody = !body ? response.statusCode : ((typeof body == 'string') ? body : JSON.parse(body)); 
            resolve(frmtBody);
        });
    });

};