// middleware/logs.js

function userCredtials(req, res, next) {
  console.log("👤 User: Alex");
  console.log("📧 Email: alex21@gmail.com");
  console.log("🔐 Password: alex12444");
  console.log("🎂 Age: 18");
  console.log("📍 Request URL:", req.url); // Helpful for debugging
  next(); // Always call next() to continue to the next route
}

export default userCredtials;
