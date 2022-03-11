import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

const BookItem = ({ book, removeBook }) => (
    <ListGroup.Item>
        {book.title} by {book.author} ${book.price}
        <Button className="ml-2" variant="danger" onClick={() => removeBook(book.id)}>
            Delete
        </Button>
    </ListGroup.Item>
)

BookItem.propTypes = {
    book: PropTypes.object.isRequired,
    removeBook: PropTypes.func.isRequired
}

export default BookItem