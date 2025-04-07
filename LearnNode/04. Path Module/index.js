import path from "path";

//1. basename: returns the last portion of a path

// console.log(path.basename("c:\\nodejs\\app.js"));
// console.log(path.basename("c:\\nodejs\\app.js",".js")); // prints the base name of the file app.js inside the directory c:\nodejs

//2. dirname: returns the directory name of a path
// console.log(path.dirname("c:\\nodejs\\courses\\app.js")); // prints the directory name of the file app.js inside the directory c:\nodejs

//3. extname: returns the extension name of a path
// console.log(path.extname("c:\\nodejs\\app.js")); // prints the extension name of the file app.js inside the directory c:\nodejs

//4. join: joins all given path segments together using the platform-specific separator as a delimiter
// console.log(path.join("c:\\nodejs\\app.js")); // prints the joined path of the file app.js inside the directory c:\nodejs

// console.log(path.join("c:", "sadhvi", "courses", "redux-toolkit"));
// //Go up a level in the directory structure

// console.log(path.join("c:", "sadhvi", "courses", "redux-toolkit",".."));
// console.log(path.join("c:", "sadhvi", "courses", "redux-toolkit","..",".."));

//5. normalize: normalizes a string path, resolving '..' and '.' segments
// console.log(path.normalize("c:\\courses\\\redux\\store\\features\\"));
// console.log(path.normalize("c:\\courses\\redux\\store\\feature"));


//6. parse: returns an object from a path string
// console.log(path.parse("c:\\nodejs\\app.js")); // prints the object of the file app.js inside the directory c:\nodejs
console.log(path.parse("c:\\nodejs\\courses\\app.js")); // prints the object of the file app.js inside the directory c:\nodejs
console.log(path.parse("c:\\nodejs\\courses\\app.js").base);
console.log(path.parse("c:\\nodejs\\courses\\app.js").ext);


//5. resolve: resolves a sequence of paths or path segments into an absolute path
// console.log(path.resolve("c:\\nodejs\\app.js")); // prints the absolute path of the file app.js inside the directory c:\nodejs



//7. format: returns a path string from an object
// console.log(path.format({ // prints the path string of the file app.js inside the directory c:\nodejs
//   root: "c:\\",  //   dir: "nodejs\\app.js",

//8. isAbsolute: true, //   base: "app.js", //   ext: ".js", //   name: "app" // }));
// console.log(path.isAbsolute("nodejs\\app.js")); // prints true if the path is absolute, false if it is relative
// prints true if the path is absolute, false if it is relative
