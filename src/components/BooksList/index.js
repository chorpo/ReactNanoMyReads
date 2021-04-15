import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bookshelves } from '../../constants/bookshelves';
import Bookshelf from '../Bookshelf';

class BooksList extends Component {
  render() {
    const { selectedBooks, onBookshelfChange } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookshelves
              .filter(shelf => shelf.visible === true)
              .map(shelf => (
                <Bookshelf
                  shelf={shelf}
                  key={shelf.id}
                  selectedBooks={selectedBooks}
                  onBookshelfChange={onBookshelfChange}
                />
              ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="search">
            <button>Add a Book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
