// export * from "./weatherDB.js";

import * as data from "./weatherDB.js";
// console.log(ritu.weatherdata);

function addData() {
    data.weatherdata.push(
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
    const data = data.weatherdata.find(info => info.location=== 'Tokyo' )
    data.tempC = "32.0";
}
modifyData();
// console.log(ritu.weatherdata);

function deleteData() {
    const data = data.weatherdata.find(info => info.location=== 'Tokyo' )
    const position = data.weatherdata.indexOf(data);
    data.weatherdata.splice(position,1);
}
deleteData();
console.log(data.weatherdata);

