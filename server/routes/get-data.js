const express = require("express");
const router = express.Router();
const coronaModel = require("../models/corona");

//vsetky dni
router.get("/", (req, res, next) => {
  coronaModel
    .find()
    .sort({ datum: 1 })
    .exec()
    .then(docs => {
      res.status(200).json(docs);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
