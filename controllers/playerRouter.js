const Player = require("../models/players");
const Team = require("../models/teams")
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Player.find({}). populate("Team"));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Player.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Player.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Player.findByIdAndRemove(req.params.id));
});

// EXPORT ROUTER
module.exports = router;
