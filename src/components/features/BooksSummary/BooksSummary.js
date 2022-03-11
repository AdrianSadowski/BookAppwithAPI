import PropTypes from 'prop-types'

const BooksSummary = ({ booksLength }) => (
    <section className="mt-4">
        <h3>Books summary...</h3>
        <p>There are {booksLength} books in the app!</p>
    </section>
)

BooksSummary.propTypes = { 
    booksLength: PropTypes.number
}

export default BooksSummary
