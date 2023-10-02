const jwt = require('jsonwebtoken')

module.exports =  verifyToken = (req,res,next) =>{
    const token = req.cookies['token']
    if (token) {
      jwt.verify(token, "UserSecret", (err, decoded)=> {
        if (err) {
          res.status(403).send({ success: false, message: "Failed to authenticate user." })
        } else {
          req.decoded = decoded
          next()
        }
      })
    } else {
      res.status(403).send({ success: false, message: "No Token Provided." })
    }
  }
