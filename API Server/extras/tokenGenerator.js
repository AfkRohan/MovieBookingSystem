module.exports = function tokenGenerator(res) {
  const token = jwt.sign(
        { user_id: userLoggedIn._id, userEmail },
        "UserSecret",
        {
          expiresIn: "2h",
        }
      );
  // save user token        
  res.cookie('token', token);
}