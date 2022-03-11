import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './components/layout/Header/Header'
import Sidebar from './components/layout/Sidebar/Sidebar'
import BooksList from './components/features/BooksList/BooksListContainer'
import { connect } from 'react-redux'
import { fetchBooks } from './redux/booksRedux'
import { useEffect } from 'react'

const App = ({ updateBooks }) => {

	useEffect(() => {
		updateBooks();
	}, [])
	
	return (
		<Container>
			<Header />
			<Row>
				<Col xs="12" md="9">
					<main className="mt-2 mb-2">
						<BooksList />
					</main>
				</Col>
				<Col xs="12" md="3">
					<Sidebar />
				</Col>
			</Row>
		</Container>
	)
}

const mapDispatchToProps = dispatch => {
	return ({
		updateBooks: () => dispatch(fetchBooks()),
	})
}

export default connect(null, mapDispatchToProps)(App)
