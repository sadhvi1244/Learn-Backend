//github of template engine of ejs : https://ejs.co/

import express from "express";

import route from "./routes/route.js";
const app = express();

app.set("view engine", "ejs"); // this tell that we are using ejs

app.use("/", route);

app.listen(8000, () => console.log("server Up"));
