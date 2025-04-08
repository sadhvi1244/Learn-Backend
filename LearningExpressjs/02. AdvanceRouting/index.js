//https methods
//GET ➡️ Retrieve data from the server
//POST ➡️ Create/Insert/Send data to the server
//Put ➡️ Update/Replace data on the server
//Patch ➡️ Update/Modify data on the server
//DELETE ➡️ Delete data from the server
//OPTIONS ➡️ Describe the communication options for the target resource
//All ➡️ Match all HTTP methods

import express from "express";

const app = express();

//Advance Routing  (String Pattern Matching path)
// app.get("/ab?cd", (req, res) => {
//   res.send("<h1>If the user hits /acd or /abcd, this will run</h1>");
// } //its old way of writing express not working in new node version 22.0.0
// app.get("/abcd", (req, res) => {
//   res.send("<h1>If the user hits /acd or /abcd, this will run</h1>");
// });
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to homepage</h1>");
// });
// //Regex Pattern Matching path
// app.get(/x/, (req, res) => {
//   res.send(
//     "<h1>If the path includes the letter (x) it will work  (http://localhost:8000/apple/x like this run too)</h1>"
//   );
// });
//Advance Regex Pattern Matching path
//users/1234555

// app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
//   res.send("<h1>Working (http://localhost:8000/users/1234)</h1>");
// });

//Nexted Routing

// app.get("/products/iphone", (req, res) => {
//   res.send("This code will run if the user hits /products/iphone");
// });



// app.listen(8000, () => {
//   console.log("Server is running on http://localhost:8000");
// });
