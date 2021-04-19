import React from 'react';
import BookshelfChanger from '../BookshelfChanger';

const Book = ({ book, shelf, onBookshelfChange }) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks &&
              book.imageLinks.thumbnail &&
              book.imageLinks.thumbnail})`
          }}
        />
        <BookshelfChanger
          book={book}
          key={shelf}
          shelf={shelf}
          onBookshelfChange={onBookshelfChange}
        />
      </div>
      <div className="book-title">{book.title}</div>
      {book.authors && (
        <div className="book-authors">
          {book.authors.map(author => (
            <React.Fragment key={author}>
              {author}
              <br />
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  </li>
);

export default Book;
