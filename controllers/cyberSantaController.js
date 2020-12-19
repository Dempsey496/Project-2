const express = require("express");
const router = express.Router();

var db = require("../models");

router.get("/single-list/:id", async function (req, res) {
  try {
    const list = await db.List.findOne({ where: { id: req.params.id } });
    const gifts = await db.Gift.findAll({ where: { listId: req.params.id } });
    const result = {};
    result.list = list;
    result.gifts = gifts;
    res.render("single-list", { list: result.list, gifts: result.gifts });
  } catch (error) {
    throw error;
  }
});

router.get("/create-list", function (req, res) {
  res.render("create-list");
});

router.get("/lists", function (req, res) {
  db.List.findAll({})
    .then(function (dbList) {
      console.log(dbList);
      res.render("lists", { lists: dbList });
    })
    .catch(function (err) {
      console.log(err);
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
      message: "Please enter a valid information",
    });
  }
  db.List.create({
    listName: req.body.name,
    listCreator: req.body.creator,
  })
    .then(function (dbPost) {
      console.log(dbPost);
    })
    .catch(function (err) {
      console.log(err);
    });
});

// router.put("/api/lists/:id", function (req, res) {
//   db.List.update(req.body, {
//     where: {
//       id: req.body.id,
//     },
//   })
//     .then(function (dbList) {
//       res.json(dbList);
//     })
//     .catch(function (err) {
//       console.log(err);
//     });
// });

router.post("/single-list/:id", function (req, res) {
  db.Gift.create(req.body)
    .then((dbGift) => {
      console.log(dbGift);
      res.json(dbGift);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/api/gift/:id", (req, res) => {
  db.Gift.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});

router.delete("/api/lists/:id", (req, res) => {
  db.List.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => res.json(data))
    .catch((err) => {
      if (err) throw err;
    });
});
module.exports = router;
