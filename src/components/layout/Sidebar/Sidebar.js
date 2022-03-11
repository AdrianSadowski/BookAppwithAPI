import AuthorsList from '../../features/AuthorsList/AuthorsListContainer.js'
import BooksSummary from '../../features/BooksSummary/BooksSummaryContainer.js'

const Sidebar = () => (
	<aside className="mt-2 mb-2">
    	<h2 className="mb-4">About the app...</h2>
    	<AuthorsList />
    	<BooksSummary />
	</aside>
)

export default Sidebar