const express = require("express");
const Workout = require("../models/workoutModel");
const { createWorkout } = require("../controllers/owrkoutController");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

// POST a single workout
router.post("/", async (req, res) => createWorkout);

// DELETE a single workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a single workout" });
});

// PATCH a single workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "PATCH a single workout" });
});

module.exports = router;
