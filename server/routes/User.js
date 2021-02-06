const express = require("express");
const router = express.Router();

const { User } = require("../models");

router.post("/", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const googleId = req.body.googleId;
  const channelName = req.body.channelName;
  const profilePictureUrl = req.body.imageUrl;

  User.create({
    name: name,
    email: email,
    googleId: googleId,
    channelName: channelName,
    profilePictureUrl: profilePictureUrl,
  }).catch((err) => console.log(err));

  res.send("Inserted into db");
});

module.exports = router;
