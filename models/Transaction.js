// const mongoose = require('mongoose');

// const TransactionSchema = new mongoose.Schema({
//   amount: Number,
//   date: Date,
//   description: String,
// });

// module.exports = mongoose.model('Transaction', TransactionSchema);

const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
