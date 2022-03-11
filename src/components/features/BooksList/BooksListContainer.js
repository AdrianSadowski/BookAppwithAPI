import BooksList from './BooksList'
import { connect } from 'react-redux'
import { getAllBooks, getRequestInfo, removeBookRequest } from '../../../redux/booksRedux.js'

const mapStateToProps = state => ({ 
	books: getAllBooks(state),
	request: getRequestInfo(state),
})

const mapDispatchToProps = dispatch => ({
	removeBook: bookId => dispatch(removeBookRequest(bookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)

