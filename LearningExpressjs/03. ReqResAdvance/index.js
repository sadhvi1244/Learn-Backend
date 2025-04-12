// import express from "express";

// const app = express();

//single callback function

// app.get("/single-cb", (req, res) => {
//   res.send("<h1>Single callback function.</h1>");
// });

// //multiple callback function
// app.get(
//   "/double-cb",
//   (req, res, next) => {
//     // res.send("Single callback function.");
//     console.log("first callback function.");
//     next(); // Call the next middleware function in the stack
//   },
//   (req, res) => {
//     res.send("second callback function.");
//   }
// );

// console.clear();

// //Array of callback functions
// // const cb1 = (req, res, next) => {
// //   console.log("first callback function.");
// //   next(); // Call the next middleware function in the stack
// // };
// // const cb2 = (req, res, next) => {
// //   console.log("second callback function.");
// //   next(); // Call the next middleware function in the stack
// // };
// // const cb3 = (req, res, next) => {
// //   console.log("third callback function.");
// //   res.send("Array of callback function.");
// //   next(); // Call the next middleware function in the stack
// // };
// // const cbArray = [cb1, cb2, cb3];

// // app.get("/array-cb", cbArray);

// const cb1 = (req, res, next) => {
//   console.log("first callback");
//   next();
// };

// const cb2 = (req, res, next) => {
//   console.log("second callback");
//   next();
// };

// app.get(
//   "/crazyness",
//   [cb1, cb2],
//   (req, res, next) => {
//     console.log("Third callback");
//     next();
//   },
//   (req, res, next) => {
//     console.log("Fourth callback");
//     res.send("Crazyness");
//   }
// );

// app.listen(8000, () => {
//   console.log("Server is running on http://localhost:8000");
// });
