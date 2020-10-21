const Team = require("../models/teams");
const Player = require("../models/players");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Team.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Team.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Team.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Team.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
