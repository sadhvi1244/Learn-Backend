// import express from "express";

// const app = express();

//ugly code
// app.get("/student", (req, res) => {
//   res.send("All Students");
// });
// app.post("/student", (req, res) => {
//   res.send("Add new student");
// });
// app.put("/student", (req, res) => {
//   res.send("Update student");
// });
// app.delete("/student", (req, res) => {
//   res.send("delete student");
// });

//Refector all ugly code
// app
//   .route("/student")
//   .get((req, res) => res.send("All Student"))
//   .post((req, res) => res.send("Add new student"))
//   .put((req, res) => res.send("update student"))
//   .delete((req, res) => res.send("Delete Students"));

// app.listen(8800, () => console.log("Server running on port 8800"));
