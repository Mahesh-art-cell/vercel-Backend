// const express = require('express');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const connectDB = require('./db');

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// connectDB();

// app.use('/api/transactions', require('./routes/transaction'));

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const transaction = require("./routes/transaction");
import categoryRoutes from './routes/categories.js';
const budgetRoutes = require('./routes/budgets');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Routes
app.use("/api/transactions", transaction);

app.use('/api/categories', categoryRoutes);

app.use('/api/budgets', budgetRoutes);

// Server Listening
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
