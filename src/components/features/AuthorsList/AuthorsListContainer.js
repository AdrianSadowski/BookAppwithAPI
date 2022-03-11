import AuthorsList from './AuthorsList'
import { connect } from 'react-redux'
import { getAllAuthors } from '../../../redux/booksRedux.js'

const mapStateToProps = state => ({
    authors: getAllAuthors(state),
})

export default connect(mapStateToProps)(AuthorsList)