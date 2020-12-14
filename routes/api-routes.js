// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the lists
  app.get("/api/lists/", function(req, res) {
    db.List.findAll({})
      .then(function(dbList) {
        res.json(dbList);
      });
  });

  // Get route for retrieving a single list
  app.get("/api/lists/:id", function(req, res) {
    db.List.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbList) {
        res.json(dbList);
      });
  });

  // POST route for saving a new list
  app.post("/api/lists", function(req, res) {
    console.log(req.body);
    db.List.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbList) {
        res.json(dbList);
      });
  });

  // DELETE route for deleting lists
  app.delete("/api/lists/:id", function(req, res) {
    db.List.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbList) {
        res.json(dbList);
      });
  });

  // PUT route for updating lists
  app.put("/api/lists", function(req, res) {
    db.List.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbList) {
        res.json(dbList);
      });
  });
  
  // Get route for retrieving a single gift
  app.get("/api/gifts/:id", function(req, res) {
    db.Gift.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbGift) {
        res.json(dbGift);
      });
  });

  // POST route for saving a new gift
  app.post("/api/gifts", function(req, res) {
    console.log(req.body);
    db.Gift.create(req.body)
      .then(function(dbGift) {
        res.json(dbGift);
      });
  });

  // DELETE route for deleting gifts
  app.delete("/api/gifts/:id", function(req, res) {
    db.Gift.destroy(req.body)
      .then(function(dbGift) {
        res.json(dbGift);
      });
  });

  // PUT route for updating gifts
  app.put("/api/gifts", function(req, res) {
    db.List.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbList) {
        res.json(dbList);
      });
  });
};
