const mongoose = require('mongoose');

const rentedBookSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Book',
  },
  renterUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  days : {
    type: Number,
    required: true
  },
});

const RentedBook = mongoose.model('RentedBook', rentedBookSchema);

module.exports = RentedBook;
