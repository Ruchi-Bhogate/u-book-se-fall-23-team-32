import BookCard from "./BookCard";

function BooksGrid({ books }) {
    return (
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    );
  }

  export default BooksGrid;
