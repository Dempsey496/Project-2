const express = require("express");
const router = express.Router();

var db = require("../models");

// Already on server.js
// router.get("/", function(req,res) {
//     db.findAll(function(data) {
//         res.render("index");
//     });
// });

router.get("/api/lists", function (req, res) {
  db.List.findAll({}).then(function (dbList) {
    res.json(dbList);
  });
});

router.post("/api/lists", function (req, res) {
  console.log(req.body);
  if (
    !req.body.name ||
    req.body.name.trim().length === 0 ||
    !req.body.creator ||
    req.body.creator.trim().length === 0
  ) {
    return res.status(400).json({
      message: "Please enter valid information",
    });
  }
  db.List.create({
    listName: req.body.name,
    listCreator: req.body.creator,
  }).then(function (dbPost) {
    res.json(dbPost);
  });
});

router.delete("/api/lists/:id", function (req, res) {
  db.List.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbList) {
    res.json(dbList);
  });
});

router.put("/api/lists", function (req, res) {
  db.List.update(req.body, {
    where: {
      id: req.body.id,
    },
  }).then(function (dbList) {
    res.json(dbList);
  });
});

router.get("/api/gifts", function (req, res) {
  db.Gift.findaAll({}).then(function (dbGift) {
    res.json(dbGift);
  });
});

router.post("/api/gifts", function (req, res) {
  console.log(req.body);
  if (
    !req.body.name ||
    req.body.name.trim().length === 0 ||
    !req.body.for ||
    req.body.for.trim().length === 0 ||
    !req.body.max ||
    req.body.max.trim().length === 0
  ) {
    return res.status(400).json({
      message: "Please enter valid information",
    });
  }
  db.Gift.create({
      giftName: req.body.name,
      giftFor: req.body.for,
      giftMaxPrice: req.body.max
  }).then(function (dbGift) {
    res.json(dbGift);
  });
});

router.put("/api/gifts", function (req, res) {
  db.Gift.update(req.body, {
    where: {
      id: req.body.id,
    },
  }).then(function (dbGift) {
    res.json(dbGift);
  });
});

router.delete("/api/Gifts/:id", function (req, res) {
  db.Gift.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbGift) {
    res.json(dbGift);
  });
});

module.exports = router;
