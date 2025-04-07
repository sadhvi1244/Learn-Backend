import * as fs from "fs";

fs.mkdir("c:\\siimoo\\courses\\python\\text.txt", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Folder Created ...Successfully");
  }
});
