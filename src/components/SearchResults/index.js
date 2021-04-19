import React from 'react';
import Book from '../Book';

const SearchResults = props => {
  const { searchedBooks, selectedBooks, onBookshelfChange } = props;

  const booksFromSearch = searchedBooks.map(book => {
    selectedBooks.map(selectedBook => {
      if (selectedBook.id === book.id) {
        book.shelf = selectedBook.shelf;
      }
      return selectedBook;
    });
    return book;
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {booksFromSearch.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : 'none'}
            onBookshelfChange={onBookshelfChange}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
