import * as fs from 'fs';

import * as data from './weatherDB.js';

fs.writeFileSync('newfile.txt',JSON.stringify(data),(err)=>{
  if(err) throw err;
}) //first time writing to the file then commenting 

let object = "";
try {
  var weatherdata = fs.readFileSync('newfile.txt');
  object = JSON.parse(weatherdata);
}
catch(err){
  console.log(err);
}
console.log (object); // for reading object
console.log('after modification');

//-----------------(adding data)----------------
function addData() {
  object.push(
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

//-----------------(updating data)--------------
function modifyData() {
  const data = object.find(info => info.location === 'Tokyo' )
  data.tempC = "32.0";
}
modifyData();

//-----------------(deleting data)-------------
function deleteData() {
  const data = object.find(info => info.location === 'Tokyo' )
  const position = object.indexOf(data);
  object.splice(position, 1);
}
deleteData();

console.log (object);
//final update to the file
  fs.writeFileSync('newfile.txt', JSON.stringify(object), function (err) {
    if (err) throw err;
    console.log('File is updated successfully.');
  })
