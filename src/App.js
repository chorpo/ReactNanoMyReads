import React from 'react';
import { Route } from 'react-router-dom';
import debounce from 'lodash.debounce';

import BooksList from './components/BooksList';
import SearchBooks from './components/SearchBooks';

import * as BooksAPI from './services/BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.onBookshelfChange = this.onBookshelfChange.bind(this);
    this.state = {
      selectedBooks: [],
      searchedBooks: []
    };
  }

  getSelectedBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ selectedBooks: books });
      })
      .catch(err => {
        console.warn(err);
      });
  };

  searchBooks = query => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then(books => {
          if (books.error) {
            this.setState({ searchedBooks: [] });
          } else {
            this.setState({ searchedBooks: books });
          }
        })
        .catch(err => {
          console.warn(err);
        });
    } else {
      this.onResetSearch();
    }
  };

  componentDidMount = () => this.getSelectedBooks();

  onBookshelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(this.getSelectedBooks())
      .catch(err => {
        console.warn(err);
      });

    this.getSelectedBooks();
  };

  onBookSearch = debounce(query => {
    this.searchBooks(query);
  }, 500);

  onResetSearch = () => {
    this.setState({ searchedBooks: [] });
  };

  render() {
    const { selectedBooks, searchedBooks } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksList selectedBooks={selectedBooks} onBookshelfChange={this.onBookshelfChange} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchedBooks={searchedBooks}
              selectedBooks={selectedBooks}
              onBookshelfChange={this.onBookshelfChange}
              onBookSearch={this.onBookSearch}
              onResetSearch={this.onResetSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
