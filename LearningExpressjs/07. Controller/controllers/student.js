import express from "express";

const allStudent = (req, res) => {
  res.send("All Student");
};

const newStudent = (req, res) => {
  res.send("create new user");
};

const updateStudent = (req, res) => {
  res.send("update user ");
};

const deleteStudent = (req, res) => {
  res.send("delete user");
};

export { allStudent, newStudent, updateStudent, deleteStudent };
