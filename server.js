
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());



const transaction = require("./routes/transaction");
const categoryRoutes = require("./routes/categories");
const budgetRoutes = require("./routes/budgets");
const connectDB = require('./db');


// Middleware
app.use(express.json());

// MongoDB Connection
connectDB()

// Routes
app.use("/api/transactions", transaction);
app.use("/api/categories", categoryRoutes);
app.use("/api/budgets", budgetRoutes);

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
