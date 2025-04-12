import express from "express";

const app = express();
//Route Params
// app.get("/student/delete/:id", (req, res) => {
//   res.send(req.params.id); //http://localhost:8000/student/delete/:123  ==>> :123
// });

// app.get("/ecom/product/iphone/:model", (req, res) => {
//   const { model } = req.params;
//   res.send(`Iphone ${model} pro max`);
// http://localhost:8000/ecom/product/iphone/15  ==>> Iphone 15 pro max
// });

// app.get("/product/:category/:id", (req, res) => {
//   const { category, id } = req.params;
//   // http://localhost:8000/product/redmi/18  ==>> Product Category (redmi) & Product ID (18)
//   res.send(`Product Category (${category}) & Product ID (${id})`);
// });

// app.get("/product/order/:day/:month/:year", (req, res) => {
//   const { day, month, year } = req.params;
//   // http://localhost:8000/product/order/12/04/2025  ==>> Product was ordered on: 12/04/2025
//   res.send(`Product was ordered on: ${day}/${month}/${year}`);
// });

// app.params
// console.clear();
// app.param("id", (req, res, next, id) => {
//   console.log(`id: ${id}`);
//   next();
// }); //http://localhost:8000/user/123 ==>> id: 123 //This is User ID path

// app.param("year", (req, res, next, id) => {
//   console.log(`id: ${id}`);
//   next();
// });  //http://localhost:8000/user/123 ==>> This is User ID path, now t now uses id now because here we are specify year, and that why id is not work


// app.get("/user/:id", (req, res) => {
//   console.log("This is User ID path");
//   res.send("Response OK");
// });

// app.listen(8000, () => console.log("Server is running at port: 8000"));
