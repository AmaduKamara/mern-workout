const express = require("express");

const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
} = require("../controllers/owrkoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout
router.get("/:id", getWorkout);

// POST a single workout
router.post("/", createWorkout);

// DELETE a single workout
router.delete("/:id", deleteWorkout);

// PATCH a single workout
router.patch("/:id", (req, res) => {
  res.json({ msg: "PATCH a single workout" });
});

module.exports = router;
