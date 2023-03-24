const express = require("express");
const Category = require("../models/Category");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const newCat = new Category(req.body);
  try {
    const saveCat = await newCat.save();
    res.status(200).json(saveCat);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allCat = await Category.find();
    res.status(200).json(allCat);
  } catch(err) {
       res.status(500).json(err);
  }
});

module.exports = router;
