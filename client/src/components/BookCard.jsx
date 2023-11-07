function BookCard({ book }) {
    return (
      <div className="book-card">
        <img src={`http://localhost:8080/${book.image}`} alt="Book Cover" />
        <h3>{book.title}</h3>
        <p>Author: {book.author}</p>
        <p>Genre: {book.genre}</p>
        <p>Year: {book.publication_year}</p>
        <p>Condition: {book.condition}</p>
        <p>Price per Day: ${book.price_per_day}</p>
        <p>Location: {book.address}</p>
        <p>Description: {book.description}</p>
        {/* Additional details and actions here */}
      </div>
    );
  }

  export default BookCard;
