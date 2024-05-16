require("dotenv").config();

const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id,role, email) => {
  return jwt.sign({ id, role,email}, `${process.env.TOKEN_KEY}`, {
    expiresIn:  1* 60 * 60,
  });
};







//The above code wraps the env token key in a backtick to avoid 
//the secretkey error that arises when the system cannot read the environment variable