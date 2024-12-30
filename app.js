const express = require('express');
const app = express();
const employeesRouter = require('./routes/employees');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// Routes
app.use('/employees', employeesRouter);

// Middleware
app.use(notFound);
app.use(errorHandler);

module.exports = app;
