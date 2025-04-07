import { create } from "domain";
import * as fs from "fs/promises";

//1. Creating Directory / Folder (mkdir)
// try {
//   await fs.mkdir("c:\\siimoo\\courses\\python");
//   console.log("Folder Created ...Successfully");
// } catch (err) {
//   console.log(err.message);
// }

//2. Reading the content of a directory (readdir)
// try {
//   const files = await fs.readdir("c:\\siimoo");
//   for (const file of files) {
//     console.log(files);
//   }
// } catch (err) {
//   console.log(err.message);
// }

//3. remove folder
// try {
//   await fs.rmdir("c:\\siimoo\\courses\\python");
//   console.log("Folder Deleted ...Successfully");
// } catch (err) {
//   console.log(err.message);
// }

//4.  Create and Write a file (writeFile)
// try {
//   await fs.writeFile("c:\\siimoo\\courses\\test.txt", "Hello World");
//   console.log("File Created and Written Successfully");
// } catch (err) {
//   console.log(err.message);
// }

// try {
//   await fs.writeFile("README.md", "Siimoo is a software engineer");
//   console.log("File Created and Written Successfully");
// } catch (err) {
//   console.log(err.message);
// }

//5. Read a file (readFile)
// try{
//     const data = await fs.readFile("README.md", "utf-8");  //if we don't specify the encoding (utf-8), it will return a buffer
//     console.log(data);
// }catch(err){
//     console.log(err.message);
// }

//6. Append to a file (appendFile)
// try{
//     await fs.appendFile("README.md", "\n\n and she is living her best life");
//     console.log("File Appended Successfully");
// }
// catch(err){
//     console.log(err.message);
// }

//7. Copy a file (copyFile)
// try {
//   await fs.copyFile("README1.md", "README.md");  content of readme1 will be copied to readme
//   console.log("File Copied Successfully");
// } catch (err) {
//   console.log(err.message);
// }

// try {
//   await fs.copyFile("README.md", "info.txt"); // new info.txt file will be created with the content of readme
//   console.log("File Copied Successfully");
// } catch (err) {
//   console.log(err.message);
// }

//8. Get file Information (stat)
try {
  const info = await fs.stat("info.txt");
  // console.log(info); // it will give us the information about the file like size, creation time, etc.
  console.log(info.isDirectory()); // it will check if the file is a directory or not
  console.log(info.isFile()); // it will check if the file is a file or not
} catch (err) {
  console.log(err.message);
}

// //9. Delete a file (unlink)
// try{
//     await fs.unlink("info.txt"); // it will delete the file
//     console.log("File Deleted Successfully");
// }catch(err){
//     console.log(err.message);
// }
