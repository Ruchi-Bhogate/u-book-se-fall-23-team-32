// CartPage.js
import React, {  useState, useEffect } from 'react';
import axios from 'axios';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found. Please log in.');
      return;
    }
    // Load cart items from the database when the provider mounts
    const loadCartItems = async () => {
      try {
        const response = await axios.get('http://localhost:8080/cartview/cart-items',{
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCartItems(response.data);
      } catch (error) {
        console.error("Could not load cart items", error);
      }
    };

    loadCartItems();
  }, []);
  // remove item from cart
  const handleRemoveItem = async (itemId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('No token found. Please log in.');
      return;
    }
    try {
      await axios.delete(`http://localhost:8080/cartview/remove-cart-item/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCartItems(currentItems => currentItems.filter(item => item._id !== itemId));
    } catch (error) {
      console.error("Could not remove cart item", error);
    }
  };
  
  // to increase or decrease number of days
  const handleIncreaseDays = async (item) => {
    const updatedItem = { ...item, days: item.days + 1 };
    await updateItemInCart(updatedItem);
  };
  
  const handleDecreaseDays = async (item) => {
    const updatedItem = { ...item, days: Math.max(1, item.days - 1) };
    await updateItemInCart(updatedItem);
  };
  // function to update backend
  const updateItemInCart = async (updatedItem) => {
    const token = localStorage.getItem('token');
    try {
      //console.log(updatedItem)
      await axios.put(`http://localhost:8080/cartview/update-cart-item`, updatedItem, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCartItems(currentItems =>
        currentItems.map(item => (item._id === updatedItem._id ? updatedItem : item))
      );
    } catch (error) {
      console.error("Could not update cart item", error);
    }
  };
  
  // Function to calculate the total price of the cart
  const calculateTotal = (items) => {
    return items.reduce((acc, item) => acc + item.price_per_day * item.days, 0).toFixed(2);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item._id} className="cart-item">
              <h3>{item.title}</h3>
              <p>Price per Day: ${item.price_per_day}</p>
              <button onClick={() => handleRemoveItem(item._id)}>Remove</button>
            <div>
              <button onClick={() => handleDecreaseDays(item)}>-</button>
              <span> Days: {item.days} </span>
              <button onClick={() => handleIncreaseDays(item)}>+</button>
            </div>
          </div>
        ))}

          <div className="cart-total">
            <h4>Total: ${calculateTotal(cartItems)}</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
