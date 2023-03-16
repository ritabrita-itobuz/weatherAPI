
import * as process from 'process';
import { createInterface } from 'readline';
import * as fs from 'fs';
import * as path from 'path';
// import * as promptSync from 'prompt-sync';
// console.log(process.argv);

console.log('Press 1 for creating a folder');
console.log('Press 2 for deleting a folder');
console.log('Press 3 to create a file');
console.log('Press 4 to delete a file');
console.log('Press 5 to rename a file');
console.log('Press 6 to rename a folder');
console.log('Press 7 to change the directory');
console.log('press 8 to exit');

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.setPrompt(`Enter any number `);
readline.prompt();
operation();

function operation() {
  readline.on('line', (number) => {
    if(number == 1) // TO CREATE A FOLDER............
    {
      readline.question('Enter your folder name ', foldername => {
        try {
          if (!fs.existsSync(foldername)) {
            fs.mkdirSync(foldername);
            console.log(`your folder named ${foldername} just created!`);
            readline.setPrompt(`Enter any number `);
            readline.prompt();
            operation();
          }
          else 
            console.log(`your folder named ${foldername} already exists!`);
            readline.setPrompt(`Enter any number `);
            readline.prompt();
            operation();
        } catch (err) {
          console.error(err);
        }
        // readline.close();
      });
    }
      
    if(number == 2) // TO DELETE A FOLDER...............
    {
      readline.question(`Are you sure to delete any folder?(Type "yes" or "no") `, decision => {
        if(decision == 'yes')
        {
          readline.question(`Which folder you want to delete? `, folderToBeDeleted => {
            const dir = folderToBeDeleted;
            fs.rmdir(dir, err => {
              if (err) {
                throw err;
              }
            
              console.log(`${dir} is deleted!`);
              readline.setPrompt(`Enter any number `);
              readline.prompt();
              operation();
            });
            // readline.close();
          })
        }
        if(decision == 'no'){
          console.log(`okay, Fine`);
          readline.close();// sure to delete
        }
      });
    }
  
    if(number == 3) // TO CREATE A FILE...........
    {
      readline.question(`Enter a File name(with Extension): `,fileName => {
        fs.writeFile(fileName, '', function (err) {
          if (err) throw err;
          console.log('File is created successfully.');
          readline.setPrompt(`Enter any number `);
          readline.prompt();
          operation();
        });
        // readline.close();
    })
    }
  
    if(number == 4) // TO DELETE A FILE...........
    {
      readline.question(`Enter a File name(with Extension): `,fileName => {
        try {
          fs.unlinkSync(fileName);
          console.log("Delete File successfully.");
          readline.setPrompt(`Enter any number `);
          readline.prompt();
          operation();
        } catch (error) {
          console.log(error);
        }
        // readline.close();
    })
    }
  
    if(number == 5) // TO RENAME A FILE
    {
      readline.question(`Enter the File name you want to rename: `, fileName => {
        readline.question(`Enter the new name: `, newFileName => {
          fs.rename(fileName, newFileName, function (err) {
            if (err) throw err;
            console.log(`${fileName} is renamed to ${newFileName}`);
            readline.setPrompt(`Enter any number `);
            readline.prompt();
            operation();
          });
          // readline.close();
        })
        // readline.close();
      })    
    }
     
    if(number == 6) // TO RENAME A FOLDER
    {
      readline.question(`Enter the Folder name you want to rename: `, folderName => {
        readline.question(`Enter the new name: `, newFolderName => {
          fs.rename(folderName, newFolderName, function (err) {
            if (err) throw err;
            console.log(`${folderName} is renamed to ${newFolderName}`);
            readline.setPrompt(`Enter any number `);
            readline.prompt();
            operation();
          });
          // readline.close();
        })
        // readline.close();
      })    
    }
  
    if(number == 7) // TO CHANGE THE DIRECTORY
    {
      console.log("current working directory: " + process.cwd());
      readline.question(`Enter the directory where you want to work now: `, newDirectory => {
        process.chdir('./'+ newDirectory);
        console.log("working directory after changing: " + process.cwd());
        readline.setPrompt(`Enter any number `);
        readline.prompt();
        operation();
        // readline.close();
      })
    }

    if(number == 8)
    {
      readline.question(`Are you sure to exit?(Type "yes" or "no") `, decision => {
        if(decision == 'yes')
          {
            readline.close();
          }
        else {
          readline.setPrompt(`Enter any number `);
          readline.prompt();
          operation();
        }
      })
      // readline.close();
    }
    // readline.close();//number rl
  });
}


