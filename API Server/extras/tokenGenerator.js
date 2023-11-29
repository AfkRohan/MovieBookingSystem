module.exports = function tokenGenerator(res) {
  const token = jwt.sign(
        { user_id: userLoggedIn._id, userEmail },
        "UserSecret",
        {
          expiresIn: "2h",
        }
      );
         
  res.cookie('token', token);
}