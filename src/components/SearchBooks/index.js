import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import SearchResults from '../SearchResults';

class SearchBooks extends Component {
  render() {
    const {
      searchedBooks,
      selectedBooks,
      onBookshelfChange,
      onBookSearch,
      onResetSearch
    } = this.props;
    return (
      <div className="search-books">
        <SearchBar onBookSearch={onBookSearch} onResetSearch={onResetSearch} />
        <SearchResults
          searchedBooks={searchedBooks}
          selectedBooks={selectedBooks}
          onBookshelfChange={onBookshelfChange}
        />
      </div>
    );
  }
}

export default SearchBooks;
