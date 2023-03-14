// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Who are you?', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });

import * as process from 'process';
import { createInterface } from 'readline';
import * as fs from 'fs';
// import * as promptSync from 'prompt-sync';
console.log(process.argv);

console.log('Press 1 for creating folder');
console.log('Press 2 for deleting folder')
const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.setPrompt(`Enter any number `);
readline.prompt();
readline.on('line', (number) => {
  if(number == 1)
  {
    readline.question('Enter your folder name', foldername => {
      try {
        if (!fs.existsSync(foldername)) {
          fs.mkdirSync(foldername);
          console.log(`your folder named ${foldername} just created!`);
        }
        else 
          console.log(`your folder named ${foldername} already exists!`);
      } catch (err) {
        console.error(err);
      }
      readline.close();
    });
  }
    
  if(number == 2)
  {
    // console.log(`Are youy sure to delete this folder`);
    readline.question(`Are you sure to delete any folder `, decision => {
      if(decision == 'yes')
      {
        console.log(`okay`);
      }
      else {
        console.log(`okay, Fine`);
      }
      readline.close();
    });
  }
    
  // readline.close();//number rl
});

