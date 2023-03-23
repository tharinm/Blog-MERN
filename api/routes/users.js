const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { findByIdAndUpdate } = require("../models/User");

const router = express.Router();




//UPDATE
router.put("/:id", async (req, res, next) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
      }
      try {
          const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
          res.status(200).json(updatedUser)

      }
      catch {
          (err) => {
              res.status(500).json(err);
      }}
  } else {
    res.status(401).json("You can update only your account");
  }
});

//DELETE

module.exports = router;
