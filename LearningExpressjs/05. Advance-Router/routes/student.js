import express from "express";
const router = express.Router();

//for documentation open Routing on express/routing 

router.get("/all", (req, res) => {
  res.send("All Student");
});

router.post("/create", (req, res) => {
  res.send("Sing in new Student ");
});

router.put("/update", (req, res) => {
  res.send("update studetnt ID");
});

router.delete("/delete", (req, res) => {
  res.send("Remove Studetn from the db");
});

export default router;
