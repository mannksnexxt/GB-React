import { SET_ERROR_STATUS, SET_IDLE_STATUS, SET_LOADING_STATUS, FETCH_BOOKS}
from '../actions/books';


export const BOOKS_REQUEST_STATUS = {
    LOADING: 'loading',
    ERROR: 'error',
    IDLE: 'idle',
}

const initialState = {
	status: BOOKS_REQUEST_STATUS.IDLE,
    books: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
		case SET_IDLE_STATUS:
            return {
                ...state,
                status: BOOKS_REQUEST_STATUS.IDLE,
            }
		case SET_ERROR_STATUS:
			return {
				...state,
				status: BOOKS_REQUEST_STATUS.ERROR,
			}
        case SET_LOADING_STATUS:
            return {
                ...state,
                status: BOOKS_REQUEST_STATUS.LOADING,
            }
        case FETCH_BOOKS: {
            return {
                ...state,
                books: action.payload.books
            }
        }
        default:
            return state
    }
}