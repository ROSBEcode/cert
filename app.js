// backend/src/app.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

module.exports = app;
