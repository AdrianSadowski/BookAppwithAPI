import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'

const AuthorsList = ({ authors }) => (
    <section>
        <h3>Authors list</h3>
        <ListGroup className="mt-4">
            {authors.map((author, index) => (
                <ListGroup.Item key={index}>
                    {author}
                </ListGroup.Item>)
            )}
        </ListGroup>
    </section>
)

AuthorsList.propTypes = { 
    authors: PropTypes.array.isRequired
}

export default AuthorsList