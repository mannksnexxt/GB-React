import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import Books from './components/books/Books'



export default function Router(props) {
	return (
		<div className="main-block">
			<header>
				<Link to="/">Home</Link>
				<Link to="/chats">Chats</Link>
				<Link to="/profile">Profile</Link>
				<Link to="/books">Books</Link>
			</header>
		
			<Switch>
				<Route path="/" exact >
					<Home/>
				</Route>

				<Route path="/chats" exact>
					<Home/>
				</Route>

				<Route path="/chats/:chatId">
					<Home/>
				</Route>

				<Route path="/profile">
					<Profile />
				</Route>

				<Route path="/books">
					<Books />
				</Route>

				
			</Switch>
		</div>
	)
}