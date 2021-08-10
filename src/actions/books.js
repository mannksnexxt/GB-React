export const FETCH_BOOKS = 'BOOKS::FETCH_BOOKS';

export const SET_ERROR_STATUS = 'BOOKS::SET_ERROR_STATUS'
export const SET_LOADING_STATUS = 'BOOKS::SET_LOADING_STATUS'
export const SET_IDLE_STATUS = 'BOOKS::SET_IDLE_STATUS'

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS })
export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS })
export const setIdleStatus = () => ({ type: SET_IDLE_STATUS })


const axios = require('axios');
const API_URL = 'https://api.crossref.org/journals';
const getBooks = async function () {
	const { data } = await axios.get(API_URL);
	return data.message.items.splice(0, 20);
}


export const setBooks = (books) => ({
    type: FETCH_BOOKS,
    payload: {
        books
    },
})


export const fetchBooksWithThunk = () => {
    return async (dispatch, getState) => {
		dispatch(setLoadingStatus())
		try {
			const books = await getBooks();

			dispatch(setIdleStatus());
			dispatch(setBooks(books));
		} catch (error) {
            console.error('error', error)
            dispatch(setErrorStatus())
        }
		
    }
}
