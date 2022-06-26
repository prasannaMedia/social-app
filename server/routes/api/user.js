const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator/check");
const User = require("../../models/User");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/auth");

console.log(process.env.jwtSecret)
router.post(
  "/",
  [
    //validators
    check("name", "name is required").not().isEmpty(),
    check("email", "enter the valid email").isEmail(),
    check("password", "enter proper password").isLength({ min: 6 }),
  ],

  async (req, res) => {
    const { name, email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //check user already exits or not
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "user already exists" }] });
      }

      //CREATE AVATAR
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      user = new User({
        name,
        email,
        avatar,
      });

      //BCRYPT HASHING
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
      //JASON WEB TOKEN

      const payload = {
        user: {
          id: user.id,
        },
      };

      //jwt method

      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token }); //it will gives a token
        }
      );

      //console.log(req.body);
      //res.send("user registered");
    } catch (err) {
      console.log(err.message);
      res.status(500).send("server error");
    }
  }
);


router.put("/",auth,async(req,res)=>{
  const {
    name,
    email,
    password
  } = req.body;
  const profileField = {};
  profileField.user = req.user.id;
  if (name) profileField.name = name;
  if (email) profileField.email = email;
  if (password) profileField.password = password;

  try {
    let profile = await User.findOne({ user: req.user.id });
    if (profile) {
      profile = await User.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileField },
        { new: "true" }
      );
      await profile.save();
      return res.json(profile);
    }

  } catch (error) {
    res.status(500).send("server error");

  }

})




router.delete("/", auth, async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.user.id });
    return res.json({ msg: "account deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});



module.exports = router;
