// import express from "express";
// import userCredtials from "./middleware/logs.js";
// // 🌐 What is Middleware?
// // Middleware functions in Express are functions that have access to:
// // - req (request object)
// // - res (response object)
// // - next (function that passes control to the next middleware or route handler)

// // When a user visits the site:
// // - Request 🙏🏻: The user sends a request expecting some response from our site.
// // - Middleware 🕛: Before processing, we check if the user is valid or authenticated.
// // - Response 🍽️: If everything is okay, we send the appropriate response back to the user.

// const app = express();
// // console.clear();
// // function userCredtials(req, res, next) {
// //   console.log("user:(alex)");
// //   console.log("email:(alex21@gmil.com)");
// //   console.log("password:(alex12444)");
// //   console.log("age:(18)");
// //   next();
// // }

// // app.get("/products", (req, res) => {
// //   res.json(products);
// // });

// // ✅ Apply middleware globally (for all routes)
// app.use(userCredtials); // This will run for every incoming request middleware

// app.get("/", (req, res) => {
//   res.send("<h1>hello admin</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>about page</h1>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>contact page</h1>");
// });
// app.listen(8000, () => console.log("Server Up"));
