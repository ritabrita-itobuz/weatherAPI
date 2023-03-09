// var fs = require ('fs');
import * as fs from 'fs';

var data = fs.readFileSync('newfile.txt');
console.log(data.toString());

console.log('after modification');
fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });
