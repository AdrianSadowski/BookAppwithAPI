import BooksSummary from './BooksSummary'
import { connect } from 'react-redux';
import { countBooks } from '../../../redux/booksRedux.js'

const mapStateToProps = state => ({ 
    booksLength: countBooks(state)
})

export default connect(mapStateToProps)(BooksSummary)