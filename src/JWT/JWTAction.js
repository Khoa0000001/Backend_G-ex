const jwt = require("jsonwebtoken");
require("dotenv").config();

const createJWT = (payload) => {
  console.log(payload);
  let key = process.env.JWT_SECRET;
  if (!key) {
    console.error("JWT_SECRET is not defined.");
    return null;
  }
  let token = null;
  try {
    token = jwt.sign(payload, key, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  } catch (err) {
    console.log("err JWT", err);
  }
  return token;
};
const verifyToken = (token) => {
  let key = process.env.JWT_SECRET;

  return jwt.verify(token, key);
};
const authenticateToken = (req, res) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.sendStatus(401); // Unauthorized
  let result = null;
  try {
    result = verifyToken(token);
  } catch (er) {
    console.error("Invalid token:", error);
  }
  return result;
};

module.exports = { createJWT, verifyToken, authenticateToken };
