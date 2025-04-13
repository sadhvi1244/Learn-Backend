//How to get data from the client to the server
//Query Parameters (via URL) or Query String
import express from "express";

const app = express();

// Query String: It is the part of the URL that follows the question mark (?).
// It is used to pass data from the client to the server.
// A query string consists of one or more key-value pairs, separated by the & symbol.
// Each key-value pair is separated by the = sign.
// http://example.com/students?name=Star&age=19
// ?name=Star&age=19 → query string
// name=Star and age=19 → key-value pairs

app.get("/product", (req, res) => {
  //   res.send(`Response ok ${req.query.category}`);
  //   //http://localhost:8000/product?category=apple  ==> Response ok apple
  //You’re directly accessing the value from req.query. It’s short and works fine for just one value.
  // Destructuring is more readable:
  //   const { category } = req.query;
  //   res.send(`Product Category: ${category}`);

  // You're using object destructuring to pull category out of req.query. This is cleaner and preferred when you expect to use multiple query params.
  // Destructuring is more readable:
  const { category, type } = req.query;
  res.send(`Category: ${category}, Type: ${type}`);
  //example: http://localhost:8000/product?category=apple&type=fruit  ==>> Category: apple, Type: fruit
});

app.listen(8000, () => console.log("Server Up"));
