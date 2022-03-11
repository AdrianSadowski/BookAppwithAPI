const createActionName = (name) => `app/books/${name}`;

// action names
const UPDATE_BOOKS = createActionName('UPDATE_BOOKS');
const ADD_BOOK = createActionName('ADD_BOOK');
const REMOVE_BOOK = createActionName('REMOVE_BOOK');
const START_REQUEST = createActionName('START_REQUEST');
const FINISH_REQUEST_WITH_ERROR = createActionName('FINISH_REQUEST_WITH_ERROR');
const FINISH_REQUEST_WITH_SUCCESS = createActionName(
  'FINISH_REQUEST_WITH_SUCCESS'
);

// selectors
export const getAllBooks = (state) => state.books.data;
export const getAllAuthors = (state) => [
  ...new Set(state.books.data.map((book) => book.author)),
];
export const countBooks = (state) => state.books.data.length;
export const getBooksByAuthors = (state, author) =>
  state.books.data.filter((book) => book.author === author);
export const getRequestInfo = (state) => state.books.request;

// action creators
export const updateBooks = (payload) => ({ type: UPDATE_BOOKS, payload });
export const addBook = (payload) => ({ type: ADD_BOOK, payload });
export const removeBook = (payload) => ({ type: REMOVE_BOOK, payload });
export const startRequest = () => ({ type: START_REQUEST });
export const finishRequestWithError = () => ({
  type: FINISH_REQUEST_WITH_ERROR,
});
export const finishRequestWithSuccess = () => ({
  type: FINISH_REQUEST_WITH_SUCCESS,
});

export const fetchBooks = () => {
  return async (dispatch) => {
    try {
      dispatch(startRequest());
      const res = await fetch('http://localhost:3131/books');
      if (res.status !== 200) throw new Error('Something went wrong');
      const data = await res.json();
      dispatch(updateBooks(data));
      dispatch(finishRequestWithSuccess());
    } catch (err) {
      console.error(err);
      dispatch(finishRequestWithError());
    }
  };
};

export const addBookRequest = (book) => {
  return (dispatch) => {
    fetch('http://localhost:3131/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: { 'Content-type': 'application/json' },
    }).then(() => dispatch(addBook(book)));
  };
};

export const removeBookRequest = (bookId) => {
  return (dispatch) => {
    fetch(`http://localhost:3131/books/${bookId}`, { method: 'DELETE' }).then(
      () => dispatch(removeBook(bookId))
    );
  };
};

const reducer = function (statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_BOOKS:
      return { ...statePart, data: action.payload };
    case ADD_BOOK:
      return { ...statePart, data: [...statePart.data, action.payload] };
    case REMOVE_BOOK:
      return {
        ...statePart,
        data: statePart.data.filter((book) => book.id !== action.payload),
      };
    case START_REQUEST:
      return {
        ...statePart,
        request: { pending: true, error: false, success: false },
      };
    case FINISH_REQUEST_WITH_ERROR:
      return {
        ...statePart,
        request: { pending: false, error: true, success: false },
      };
    case FINISH_REQUEST_WITH_SUCCESS:
      return {
        ...statePart,
        request: { pending: false, error: false, success: true },
      };
    default:
      return statePart;
  }
};

export default reducer;
