import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import shortid from 'shortid'
import { useState } from 'react'

const BookForm = ({ addBook }) => {

    const [title, setTitle] = useState('')
	const [author, setAuthor] = useState('')
	const [price, setPrice] = useState(0)

  	const handleSubmit = e => {
    	e.preventDefault()
    	addBook({
            title,
            author,
            price,
            id: shortid()
    	})
  	}

    return (
        <section>
            <h3 className="mt-4">Add book</h3>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" value={author} onChange={e => setAuthor(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={price} onChange={e => setPrice(e.target.value)} />
                </Form.Group>

                <Button type="submit" variant="primary">
                    Add book
                </Button>

            </Form>
        </section>
    )
}

BookForm.propTypes = { 
	addBook: PropTypes.func
}

export default BookForm
