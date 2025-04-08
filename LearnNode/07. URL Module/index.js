import { URL } from "url";

const myURL = new URL(
  "https://www.example.com:8080/p/a/t/h/?query=string#hash"
);

// console.log(myURL.hash); //

// console.log(myURL.host);

// console.log(myURL.hostname); // it give the hostname without port number
// console.log(myURL.port); // it give the port number
// console.log(myURL.pathname); // it give the path name
// console.log(myURL.href); // it give the full url

// console.log(myURL.protocol); // it give the protocol of the url
// console.log(myURL.search); // it give the search query of the url

// console.log(myURL.searchParams); // it give the search params of the url

console.log(myURL.toString()); // it give the full url as string
console.log(myURL.toJSON()); // it give the full url as json
