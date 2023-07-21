/**
 * 1. import NPM module :
 *
 * to import any package in node js us require
 * ex. const anyVariable= require("package_name")
 */

// const color = require("cli-color");

// console.log(color.red("..This is the use of package.."));
// console.log(color.yellow("..This is the use of package.."));
// console.log(color.green("..This is the use of package.."));

//2. import local module/file:

// const auth = require("./Auth");

//call userImportDetails because it's function

// auth("Asmita")  //passing username by calling it
//output: user Asmita has been logined.

//more than one files

// auth.register("Asmita");
// auth.login("Abhay", "private");

/**
 * 3. Core modules in node js:
 * ex: path, os, http etc
 *
 */
//1. path

const { log } = require("console");
const path = require("path");
//1. dirname: directory name (presently in which folder you are)
// console.log(__filename)
// console.log('folder name: ', path.dirname(__filename));

//2.filename: it will give us current file name

// console.log('file name: ', path.basename(__filename))  //file name:  modules.js

//3.extension : it will tell us the file extension

// console.log('extension name: ', path.extname(__filename));  //extension name:  .js

//4.parse
// console.log('parse: ', path.parse(__filename));
/**
 * it will rturn object of all the info
 * parse:  {
  root: 'C:\\',
  dir: 'C:\\Users\\sai\\Desktop\\Node Js',
  base: 'modules.js',
  ext: '.js',
  name: 'modules'
}
 */

//5. join:
// console.log("join: ", path.join(__dirname, 'order' , 'app.js'));
/**join:  C:\Users\sai\Desktop\Node Js\order\app.js
 * here 1. C:\Users\sai\Desktop\Node Js is current directory
 * 2. parameter:  \order
 * 3. new file: \app.js
 * **/

//6. file system : useful for create/read/write/delete the file form system

const fs = require("fs");
//1.make a folder/directory
// fs.mkdir(path.join(__dirname, "./test"), (err) => {
//   if (err) {
//     console.log("something went wrong.."); //something went wrong..
//   }
//   console.log("folder created..", err);
// });

/**
 * if exists   code: 'EEXIST'
 *
 *
 */

//2. create file
// fs.writeFile(path.join(__dirname,"test","./test.txt"),"what we want inside file?", (err)=>{
//   if(err){
// throw err
//   }
//   console.log("created file...")
// })

// 3.to add data(append data)

// fs.appendFile(
//   path.join(__dirname, "test", "./test.txt"),
//   "this is new data to append into previouse data",
//   (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("added data...");
//   }
// );

//4. read data from filr

// fs.readFile(path.join(__dirname,"test","./test.txt"),(err,data)=>{
//   if(err){
//     console.log(err);
//   }
//   const content= Buffer.from(data);
//   console.log(content.toString())
// })

// OR


// fs.readFile(path.join(__dirname,"test","./test.txt"),"utf-8", (err,data)=>{
//   if(err){
//     console.log(err);
//   }

//   console.log(data)
// })

