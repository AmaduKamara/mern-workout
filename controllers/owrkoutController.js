const Workout = require("../models/workoutModel");

// Get all workouts

// Get a single workout

//  Create a new workout
const createWorkout = async (req, res) => {
  const { title, reps, load } = req.body;

  // Add workout doc to db
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a single workout

// Update a single workout

// Export controller functions
module.exports = {
  createWorkout,
};
