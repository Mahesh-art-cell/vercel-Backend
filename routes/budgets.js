const express = require('express');
const router = express.Router();
const Budget = require('../models/Budget');

router.get('/', async (req, res) => {
  const budgets = await Budget.find();
  res.json(budgets);
});

router.post('/', async (req, res) => {
  const newBudget = new Budget(req.body);
  await newBudget.save();
  res.status(201).json(newBudget);
});

router.put('/:id', async (req, res) => {
  const updated = await Budget.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

router.delete('/:id', async (req, res) => {
  await Budget.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

module.exports = router;

