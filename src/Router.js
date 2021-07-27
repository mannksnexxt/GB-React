import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import App from './App'
import ChatList from './components/chatList/ChatList'


export default function Router() {
	return (
		<div className="main-block">
			<header>
				<Link to="/">Home</Link>
				<Link to="/chats">Chats</Link>
				<Link to="/profile">Profile</Link>
			</header>
		
			<Switch>
				<Route path="/" exact>
					<h1>Main</h1>
				</Route>

				<Route path="/chats" exact>
					<App />
				</Route>

				<Route
					path="/chats/:id" 
					render={ ({ match }) => {
						return <App current={match.params.id}/>
					}}
				/>
				

				<Route path="/profile">
					<h1>Profile</h1>
				</Route>

				
			</Switch>
		</div>
	)
}