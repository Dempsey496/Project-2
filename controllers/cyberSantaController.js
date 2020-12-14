const express = require("express");
const router = express.Router();

var db = require("../models");

    // Make post for "logged in" user
router.get("/", function(req,res) {
    db.findAll(function(data) {
        res.render("index");
    });
});

router.get("/api/lists", function(req, res) {
    db.List.findAll({}).then(function(dbList) {
        res.json(dbList);
    }).catch(function(err) {
        console.log(err);
    });
});

router.post("/api/lists", function(req, res) {
    console.log(req.body);
    db.List.create({
        listName: req.body.name,
        listCreator: req.body.creator
    }).then(function(dbPost) {
        res.json(dbPost);
    }).catch(function(err) {
        console.log(err);
    });
});

router.delete("/api/lists/:id", function(req, res) {
    db.List.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbList) {
        res.json(dbList);
    }).catch(function(err) {
        console.log(err);
    });
});

router.put("/api/lists", function(req, res) {
    db.List.update(req.body, {
        where: {
            id: req.body.id
        }
    }).then(function(dbList) {
        res.json(dbList);
    }).catch(function(err) {
        console.log(err);
    });
});

router.get("/api/gifts", function(req,res) {
    db.Gift.findaAll({}).then(function(dbGift) {
        res.json(dbGift);
    }).catch(function(err) {
        console.log(err);
    });
});

 router.post("/api/gifts", function(req, res) {
    console.log(req.body);
    db.Gift.create(req.body).then(function(dbGift) {
        res.json(dbGift);
    }).catch(function(err) {
        console.log(err);
    });
});

router.put("/api/gifts", function(req, res) {
    db.Gift.update(req.body, 
        {
            where: {
                id: req.body.id
            }
        }).then(function(dbGift) {
            res.json(dbGift);
        }).catch(function(err) {
            console.log(err);
        });
});

router.delete("/api/Gifts/:id", function(req, res) {
    db.Gift.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbGift) {
        res.json(dbGift);
    }).catch(function(err) {
        console.log(err);
    });
});

module.exports = router;