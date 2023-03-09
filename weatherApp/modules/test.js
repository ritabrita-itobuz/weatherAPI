// export * from "./weatherDB.js";

// let f = require('./weatherDB');
// console.log(f);

import * as ritu from "./weatherDB.js";
// console.log(ritu.weatherdata);

function addData() {
    ritu.weatherdata.push(
        {
            location: 'keshtopur',
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
// console.log(ritu.weatherdata);

function modifyData() {
    const data = ritu.weatherdata.find(info => info.location=== 'Tokyo' )
    data.tempC = "32.0";
}
modifyData();
// console.log(ritu.weatherdata);

function deleteData() {
    const data = ritu.weatherdata.find(info => info.location=== 'Tokyo' )
    const position = ritu.weatherdata.indexOf(data);
    ritu.weatherdata.splice(position,1);
}
deleteData();
console.log(ritu.weatherdata);

