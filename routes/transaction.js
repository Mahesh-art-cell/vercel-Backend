


const express = require("express");
const Transaction = require("../models/Transaction");

const router = express.Router();

// Create a new transaction
router.post("/", async (req, res) => {
  const { amount, date, description } = req.body;

  try {
    const newTransaction = new Transaction({
      amount,
      date,
      description,
    });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(400).json({ error: "Failed to add transaction" });
  }
});

// Get all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(400).json({ error: "Failed to fetch transactions" });
  }
});

// Update a transaction
router.put("/:id", async (req, res) => {
  const { amount, date, description } = req.body;
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      { amount, date, description },
      { new: true }
    );
    res.json(updatedTransaction);
  } catch (err) {
    res.status(400).json({ error: "Failed to update transaction" });
  }
});

// Delete a transaction
router.delete("/:id", async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(400).json({ error: "Failed to delete transaction" });
  }
});

module.exports = router;


