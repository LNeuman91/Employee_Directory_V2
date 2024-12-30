const express = require("express");
const employeesRouter = require("./routes/employees");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

// Root route
app.get("/", (req, res) => {
  res.send("Hello employees!");
});

// Employees routes
app.use("/employees", employeesRouter);

// 404 Middleware
app.use(notFound);

// Error-handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
