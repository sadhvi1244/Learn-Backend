import express from "express";
const router = express.Router();

//for documentation open Routing on express/routing

router.get("/all", (req, res) => {
  res.send("All teacher");
});

router.post("/create", (req, res) => {
  res.send("Sing in new teacher ");
});

router.put("/update", (req, res) => {
  res.send("update teacher ID");
});

router.delete("/delete", (req, res) => {
  res.send("Remove teacher from the db");
});

export default router;
