

// const mongoose = require("mongoose");

// const transactionSchema = new mongoose.Schema({
//   amount: {
//     type: Number,
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
// }, { timestamps: true });

// const Transaction = mongoose.model("Transaction", transactionSchema);
// module.exports = Transaction;


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

module.exports = mongoose.model("Transaction", transactionSchema);
