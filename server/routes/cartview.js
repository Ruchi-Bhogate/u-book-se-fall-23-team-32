// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../models/cart');
const User = require('../models/user_model');
const jwt = require('jsonwebtoken'); // This should be at the top of your file


// Get cart items for a user
router.get('/cart-items', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1]; 
    const decoded = jwt.verify(token, 'mysecretkey170904');
    const user = await User.findById(decoded.userId);
    //console.log(user)
    const cartItems = await Cart.find({ userId: user._id });
    const Items = cartItems[0].items
    console.log(Items)
    res.json(Items);
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: error.message });
  }
});

// Add an item to the cart
router.post('/add-to-cart', async (req, res) => {
  const  book  = req.body;
  console.log(book)
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1]; 
  const decoded = jwt.verify(token, 'mysecretkey170904');
  const user = await User.findById(decoded.userId);
  const userId = user._id;
  try {
    // Check if the book is already in the cart
    const existingItem = await Cart.findOne({ userId, 'items._id': book._id });
    //console.log(existingItem)
    if (existingItem) {
      return res.json({ message: 'Item already in cart' });
    }

    // Add new item to cart
    const updatedCart = await Cart.findOneAndUpdate(
      { userId },
      { $push: { items: book } },
      { new: true, upsert: true } // upsert will create a new cart if it doesn't exist
    );
   
    res.json({ message: 'Item added to cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/update-cart-item', async (req, res) => {
  try {
    const { _id, days } = req.body; // _id is the cart item's id, days is the new quantity
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, 'mysecretkey170904'); // Use environment variable for secret
    const userId = decoded.userId;

    // Find the cart by userId and update the specific item
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).send('Cart not found');
    }

    const itemIndex = cart.items.findIndex(item => item._id.equals(_id));
    //console.log(itemIndex)
    if (itemIndex === -1) {
      return res.status(404).send('Item not found in cart');
    }

    // Update the days for the item
    cart.items[itemIndex].days = days;
    //console.log(cart)
    // Save the updated cart
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

router.delete('/remove-cart-item/:itemId', async (req, res) => {
  try {
    const itemId = req.params.itemId;
    const authHeader = req.headers.authorization;
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, 'mysecretkey170904'); // Use environment variable for secret
    const userId = decoded.userId;

    // Find the cart by userId and remove the specific item
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).send('Cart not found');
    }

    // Remove the item from the cart
    cart.items = cart.items.filter(item => !item._id.equals(itemId));

    // Save the updated cart
    await cart.save();

    res.json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
