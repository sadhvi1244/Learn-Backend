// // 🔹 Importing required modules
// import express from "express"; // Import Express framework
// import {join} from "path"; // Import Node.js 'path' module to handle file paths

// // 🔹 Create an Express application
// const app = express();

// // 🔹 Serving static files using middleware
// // This line tells Express to serve all static assets (HTML, CSS, JS, images, etc.) from the 'public' folder
// // For example: 'public/style.css' will be available at 'http://localhost:8000/style.css'
// app.use(express.static("./public"));

// // 🔹 Define route for root URL '/'
// app.get("/", (req, res) => {
//   // __process.cwd()__ returns the current working directory
//   // __path.join()__ is used to safely join the current directory path with 'public/index.html'
//   // This sends the index.html file to the browser when someone visits the root route
//   res.sendFile(path.join(process.cwd(), "./public/index.html"));
// });

// // 🔹 Start the server and listen on port 8000
// app.listen(8000, () => console.log("🚀 Server Up at http://localhost:8000"));
