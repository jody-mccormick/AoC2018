"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
const bluebird = require("bluebird");
function getData(day) {
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
            if (error)
                reject(error);
            if (!response || !(Number(response.statusCode) >= 200 && Number(response.statusCode) < 400))
                console.log(`Recieved status code ${response.statusCode} from ${options['url']}`);
            const frmtBody = !body ? response.statusCode : ((typeof body == 'string') ? body : JSON.parse(body));
            resolve(frmtBody);
        });
    });
}
exports.getData = getData;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0RGF0YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2dldERhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBb0M7QUFDcEMscUNBQXNDO0FBRXRDLFNBQWdCLE9BQU8sQ0FBQyxHQUFXO0lBRS9CLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkMsTUFBTSxPQUFPLEdBQUc7UUFDWixNQUFNLEVBQUUsS0FBSztRQUNiLEdBQUcsRUFBRSxxQ0FBcUMsU0FBUyxRQUFRO1FBQzNELE9BQU8sRUFBRTtZQUNMLE1BQU0sRUFBRSwyS0FBMks7U0FDdEw7S0FDSixDQUFDO0lBRUYsT0FBTyxJQUFJLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtRQUNwQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUN2QyxJQUFJLEtBQUs7Z0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLFFBQVEsQ0FBQyxVQUFVLFNBQVMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvSyxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUVQLENBQUM7QUFyQkQsMEJBcUJDO0FBQUEsQ0FBQyJ9