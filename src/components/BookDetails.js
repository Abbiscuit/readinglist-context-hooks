import React, { useContext } from 'react';
import { BookContext } from '../contexts/book.context';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{book.title.toUpperCase()}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
