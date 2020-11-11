const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: 'This is required.'
        },
        name: {
            type: String,
            required: 'This is required.'
        },
        duration: {
            type: Number,
            required: 'This is required.'
        },
        weight: {
            type: Number,
            required: 'This is required.'
        },
        reps: {
            type: Number,
            required: 'This is required.'
        },
        sets: {
            type: Number,
            required: 'This is required.'
        },
        distance: {
            type: Number,
            required: 'This is required.'
        }
    }]
})

workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;