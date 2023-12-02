import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/RentedBooksPage.css'; 

function RentedBooksPage({ userId }) {
  const [rentedBooks, setRentedBooks] = useState([]);

  useEffect(() => {

          const token = localStorage.getItem('token');
          if (!token) {
            alert('No token found. Please log in.');
            return;
          }

         const fetchBooks = async () => {
            try {
              const response = await axios.get('http://localhost:8080/rentedbooks/getbooks',{
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              setRentedBooks(response.data)
            } catch (error) {
              console.error('Error fetching rented books:', error);
            }
          };
      
          fetchBooks();
        
  }, []);

  return (
    <div className="rented-books">
      <h1>My Rented Books</h1>
      <ul>
        {rentedBooks.map(book => (
          <li key={book._id}>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Rented for {book.days} days</p>
            <p>Price per day: ${book.price_per_day}</p>
            {/* Add more details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentedBooksPage;
