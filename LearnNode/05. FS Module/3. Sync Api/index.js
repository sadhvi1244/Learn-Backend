import * as fs from 'fs';

//1. Creating Directory / Folder (mkdir)
fs.mkdirSync("c:\\siimoo\\courses\\python\\demo", {recursive : true}); //recursive is used to create the directory if it doesn't exist
console.log("Folder Created ...Successfully");

//2. Removing Directory / Folder (rmdir)
fs.rmdirSync("c:\\siimoo\\courses\\python\\demo", {recursive : true}); //recursive is used to remove the directory if it doesn't exist
console.log("Folder Deleted ...Successfully");