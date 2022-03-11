import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import BookForm from '../BookForm/BookFormContainer.js';
import BookItem from '../../views/BookItem/BookItem.js';
import { Alert, Spinner } from 'react-bootstrap';

const BooksList = ({ books, removeBook, request }) => (
  <div>
    <h2>Books list</h2>
    {request.pending && <Spinner animation='border' variant='primary' />}
    {request.error && <Alert variant='warning'>Error... :(</Alert>}
    {request.success && (
      <ListGroup className='mt-4'>
        {books.map((book) => (
          <BookItem
            key={book.id}
            book={book}
            removeBook={() => removeBook(book.id)}
          />
        ))}
      </ListGroup>
    )}
    {<BookForm />}
  </div>
);

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired,
};

export default BooksList;
