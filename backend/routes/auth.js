const router = require("express").Router();
const User = require("../models/user");

router.post("/login", async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      let isValidatepassword = user.password === req.body.password;
      if (isValidatepassword) {
        res.status(200).json(user);
      } else {
        res.status(400).json({ messae: "incorrect password", status: false });
      }
    } else {
      res.status(400).json({ messae: "User Not found", status: false });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/register", async (req, res) => {
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  //   res.send("user registration successfully");

  const data = await user.save();
  res.status(200).json(data);
});

module.exports = router;
