import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends Component {
  state = {
    inputValue: ''
  };

  handleChange = event => {
    const targetVal = event.target.value;
    this.setState({ inputValue: targetVal }, () => {
      this.props.onBookSearch(targetVal);
    });
  };

  render() {
    const { onResetSearch } = this.props;
    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={onResetSearch}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Search by title or author"
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
