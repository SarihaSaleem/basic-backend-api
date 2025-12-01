## Basic Backend API
This is a simple REST API created using node.js and express.js to manage workouts.

## features
(POST) Add a new workout entry
(GET) get all workouts
(GET) get a single workout by ID
(PUT) Update an existing workout
(DELETE)Delete a workout

## API endpoints
POST /api/workouts
GET /api/workouts
GET /api/workouts/:id
PUT /api/workouts/:id
DELETE /api/workouts/:id

## Example Body to paste in POST

{
    "date":"2025-11-27", 
    "excercise":"Running",
     "duration":30,
    "caloriesBurned":250
}

## HOW to RUN
npm install
npm start

To run:http://localhost:3000

## Deployment
https://basic-backend-api-1.onrender.com

## GitHub Repository
https://github.com/SarihaSaleem/basic-backend-api.git

## Author
Sariha