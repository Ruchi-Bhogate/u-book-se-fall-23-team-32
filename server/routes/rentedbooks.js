const express = require('express');
const RentedBook = require('../models/RentedBook'); 
const Book = require('../models/Book');
const User = require('../models/user_model');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Fetch rented books for a specific user
router.get('/getbooks', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1]; 
    const decoded = jwt.verify(token, 'mysecretkey170904');
    const user = await User.findById(decoded.userId);

    const rentedBooks = await RentedBook.find({ renterUserId: user._id })
                                        .populate('bookId')
                                        .exec();
    console.log(rentedBooks)
    res.json(rentedBooks.map(book => ({
      _id: book._id,
      title: book.bookId.title,
      author: book.bookId.author,
      genre: book.bookId.genre,
      startDate: book.startDate,
      days: book.days,
      price_per_day: book.bookId.price_per_day,
      image: book.bookId.image
    })));
  } catch (error) {
    console.error('Error fetching rented books:', error);
    res.status(500).json({ message: 'Error fetching rented books.' });
  }
});

module.exports = router;
