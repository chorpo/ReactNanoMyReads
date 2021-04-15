import React, { Component } from 'react';
import { bookshelves } from '../../constants/bookshelves';

class BookshelfChanger extends Component {
  state = {
    value: this.props.shelf
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onBookshelfChange(this.props.book, value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          {bookshelves.map(bookshelf => (
            <option key={bookshelf.id} value={bookshelf.id}>
              {bookshelf.title}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
