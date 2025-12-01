const express = require('express');
const app = express();

app.use(express.json());

//Tempary in-memory storage for demonstration purposes
let events = [];
let eventsIdCounter = 1;

//POST /api/workouts - Create a new workout
app.post('/api/workouts', (req, res) => {
    const { date, excercise, duration, caloriesBurned } = req.body;
    const newEvent = { id: eventsIdCounter++, date, excercise, duration, caloriesBurned };
    events.push(newEvent);
    res.status(201).json(newEvent);
});

//GET /api/workouts - Retrieve all workout events
app.get('/api/workouts', (req, res) => {
    res.json(events);
});

//GET /api/workouts/:id - Retrieve a specific workout event by ID
app.get('/api/workouts/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    const event = events.find(e => e.id === eventId);
    if (event) {
        res.json(event);
    } else {
        res.status(404).json({ message: 'Workout not found' });
    }
    return res.status(200).json({ message: 'Workout retrieved successfully' });
});

//PUT /api/workouts/:id - Update a specific workout event by ID(exercise, duration, caloriesBurned
app.put('/api/workouts/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    const { excercise, duration, caloriesBurned } = req.body;
    const event = events.find(e => e.id === eventId);
    if (event) {
        event.excercise = excercise || event.excercise;
        event.duration = duration || event.duration;
        event.caloriesBurned = caloriesBurned || event.caloriesBurned;
        res.json(event);
    } else {
        res.status(404).json({ message: 'Workout not found' });
    }
    return res.status(200).json({ message: 'Workout updated successfully' });
});

//DELETE /api/workouts/:id - Delete a specific workout event by ID
app.delete('/api/workouts/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    const eventIndex = events.findIndex(e => e.id === eventId);
    if (eventIndex !== -1) {
        events.splice(eventIndex, 1);
        res.json({ message: 'Workout deleted successfully' });
    } else {
        res.status(404).json({ message: 'Workout not found' });
    }
    return res.status(200).json({ message: 'Workout deleted successfully' });
}
);
// Start the server

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Welcome to the Workout Tracker API');
});
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
