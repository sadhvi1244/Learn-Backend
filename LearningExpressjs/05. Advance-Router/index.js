import express from "express";
import students from "./routes/student.js";
import teachers from "./routes/teacher.js";
const app = express();

app.use("/students", students);
app.use("/teachers", teachers);
//1. Create routes folder and put your routes in a seperate file

//2. Create instance ofexpress.Router()

//3. Instead of app.methods change that to "router.method"

//4. Export router

//5. Import router

//6. Use the (app.use) build-in middleware & provide your routes

app.listen(8000, () => console.log("Server is running at port: 8000"));
