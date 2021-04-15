import React from 'react';
import Book from '../Book';

const Bookshelf = props => {
  const { shelf, selectedBooks, onBookshelfChange } = props;
  const shelfBooks = selectedBooks.filter(selectedBook => selectedBook.shelf === shelf.id);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map(book => (
            <Book
              id={book.id}
              key={book.id}
              shelf={shelf.id}
              book={book}
              onBookshelfChange={onBookshelfChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
