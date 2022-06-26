const express = require("express");
const router = express.Router();
const config = require("config");
const auth = require("../../middleware/auth");
const Profile = require("../../models/Profile");
const { check, validationResult } = require("express-validator/check");

router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).send("no profile");
    }
    return res.json(profile);
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});


router.get("/", async (req, res) => {
  try {
    const profile = await Profile.find().populate("user", ["name", "avatar"]);
    await res.json(profile);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send("server error");
  }
});

//route to get profile by user_id
router.get("/user/:user_id", async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      return res.status(400).send("no profile");
    }
    return res.json(profile);
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
});

//route to delete profile by id
router.delete("/", auth, async (req, res) => {
  try {
    await Profile.findOneAndRemove({ user: req.user.id });
    await User.findOneAndRemove({ _id: req.user.id });
    return res.json({ msg: "account deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});




module.exports = router;
