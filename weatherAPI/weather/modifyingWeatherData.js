
import * as information from "./weatherDB.js";
// console.log(data.weatherdata);

function addData() {
    information.weatherdata.push(
        {
            location: 'Bardhaman',
            tempC: '13',
            tempF: '55.4',
            condition: {
                text:"Partly Cloudy",
                feelsLikeC: "12",
                feelsLikeF:"53.6",
                humidity: "30"
            },
        },
    )
}
addData();
// console.log(information.weatherdata);

function modifyData() {
    const data = information.weatherdata.find(info => info.location === 'Tokyo' )
    data.tempC = "33.5.0";
}
modifyData();
console.log(information.weatherdata);

function deleteData() {
    const data = information.weatherdata.find(info => info.location === 'Tokyo' )
    const position = information.weatherdata.indexOf(data);
    information.weatherdata.splice(position, 1);
}
deleteData();
// console.log(information.weatherdata);

