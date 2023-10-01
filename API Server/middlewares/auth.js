const jwt = require('jsonwebtoken')

module.exports =  verifyToken = (req,res,next) =>{
    const token = req.cookie.token
    try {
      const decoded = jwt.verify(token, "UserSecret");
      req.user = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    console.log("User verified")
    return next();
  }
