import React from 'react';
import { Route } from 'react-router-dom';

import BooksList from './components/BooksList';
import SearchBooks from './components/SearchBooks';

import * as BooksAPI from './services/BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.onBookshelfChange = this.onBookshelfChange.bind(this);
    this.state = {
      selectedBooks: []
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

  componentDidMount = () => this.getSelectedBooks();

  onBookshelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(this.getSelectedBooks())
      .catch(err => {
        console.warn(err);
      });

    this.getSelectedBooks();
  };

  render() {
    const { selectedBooks } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BooksList selectedBooks={selectedBooks} onBookshelfChange={this.onBookshelfChange} />
          )}
        />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
