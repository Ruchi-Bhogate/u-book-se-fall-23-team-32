const express = require('express');
const OrderDetails = require('../models/orderDetails'); 
const router = express.Router();


router.get('/orders', async (req, res) => {
    const { status } = req.query; // Retrieve the status from query parameters
  
    try {
      const query = status ? { status } : {}; // If status is provided, use it in the query
      const orders = await OrderDetails.find(query);
      res.json(orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
      res.status(500).json({ message: 'Error fetching orders.' });
    }
  });
  
// Endpoint to update order status
router.put('/orders/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body; // 'approved' or 'declined'

  try { 
    const updatedOrder = await OrderDetails.findByIdAndUpdate(orderId, { status }, { new: true });
    console.log(updatedOrder)
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error updating order.' });
  }
});

module.exports = router;
