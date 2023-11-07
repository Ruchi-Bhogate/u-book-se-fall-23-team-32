import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BooksGrid from './BooksGrid';
import '../styles/BrowseBooks.css';

function BrowseBooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/userview/browsebooks');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="browse-books-page">
      <h1>Posted Books</h1>
      <BooksGrid books={books} />
    </div>
  );
}

export default BrowseBooksPage;
