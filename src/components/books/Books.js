import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { booksSelector } from '../../selectors/books';
import { fetchBooksWithThunk } from '../../actions/books';

import { BOOKS_REQUEST_STATUS } from '../../reducers/books'




function Books(props) {
	const { books, status } = useSelector(state => state.books);
	const dispatch = useDispatch();
	
	const handleGetBooks = async () => {
		dispatch(fetchBooksWithThunk())
	}
	if (status === BOOKS_REQUEST_STATUS.LOADING) {
		console.log(status);
		return <p>Loading...</p>
	}

	return (
		<div className="books">
			<h1>Books</h1>
			<button onClick={ handleGetBooks }>Get books</button>
			{
				status !== BOOKS_REQUEST_STATUS.ERROR
				?
				<ul>
					{
						books.map(book => {
							return (
								<li key={book.title}>
									<h3>{ book.title }</h3>
									<h4>{ book.publisher }</h4>
								</li>
							)
						})
					}
				</ul>
				:
				<p className="error">ERROR</p>
			}
			
		</div>
	);
}

export default Books;