import BookForm from './BookForm'
import { connect } from 'react-redux'
import { addBookRequest } from '../../../redux/booksRedux.js'

const mapDispatchToProps = dispatch => ({
    addBook: book => dispatch(addBookRequest(book))
})
  
export default connect(null, mapDispatchToProps)(BookForm)