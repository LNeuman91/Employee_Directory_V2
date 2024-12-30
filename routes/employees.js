const express = require("express");
const router = express.Router();
const employees = require("../data/employees.js"); // Import employees data
const { v4: uuidv4 } = require("uuid");

// GET /employees - Get all employees
router.get("/", (req, res) => {
  res.json(employees);
});

// GET /employees/:id - Get specific employee
router.get("/:id", (req, res) => {
  const employeeId = parseInt(req.params.id, 10);
  const employee = employees.find((emp) => emp.id === employeeId);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found" });
  }

  res.json(employee);
});

// GET /employees/random - Get a random employee
router.get("/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.json(randomEmployee);
});

// POST /employees - Add a new employee with a unique ID
router.post("/", express.json(), (req, res) => {
  const { name } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "Name is required and must be a string" });
  }

  const newEmployee = { id: uuidv4(), name };
  employees.push(newEmployee);
  res.status(201).json(newEmployee);
});

module.exports = router;
