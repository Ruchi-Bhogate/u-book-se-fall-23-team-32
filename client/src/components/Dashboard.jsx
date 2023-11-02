import React, { Component } from 'react';
import axios from 'axios';
import '../styles/Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postedBooks: [],
      rentedBooks: [],
      earnings: 0,
    };
  }

  componentDidMount() {
    // Fetch posted books, rented books, and earnings data from the server
    // and update the corresponding state variables.
  }

  handlePostNewBook = () => {
    // Handle post new book logic
  };

  render() {
    const { postedBooks, rentedBooks, earnings } = this.state;

    return (
      <div className="dashboard-container">
        <div className="summary-section">
          <h2>Summary</h2>
          <p>Posted Books: {postedBooks.length}</p>
          <p>Rented Books: {rentedBooks.length}</p>
        </div>
        <div className="post-new-book-button">
          <button onClick={this.handlePostNewBook}>Post New Book</button>
        </div>
        <div className="rented-books-list">
          <h2>Rented Books</h2>
          <ul>
            {rentedBooks.map((book) => (
              <li key={book.id} className="rented-book-item">
                <p>Title: {book.title}</p>
                <p>Renter's Details: {book.renterDetails}</p>
                <p>Lender's Details: {book.lenderDetails}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="earnings-section">
          <h2>Earnings</h2>
          <p>Total Earnings: ${earnings}</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
