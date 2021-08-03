import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Route, Redirect } from 'react-router'
import { Link } from 'react-router-dom'

import Home from './components/home/Home'
import Profile from './components/profile/Profile'



export default function Router(props) {
	return (
		<div className="main-block">
			<header>
				<Link to="/">Home</Link>
				<Link to="/chats">Chats</Link>
				<Link to="/profile">Profile</Link>
			</header>
		
			<Switch>
				<Route path="/" exact >
					<Home chatList={props.chatList} setChatList={props.setChatList} />
				</Route>

				<Route path="/chats" exact>
					<Home chatList={props.chatList} setChatList={props.setChatList} />
				</Route>

				<Route path="/chats/:chatId">
					<Home chatList={props.chatList} setChatList={props.setChatList} />
				</Route>

				

				<Route path="/profile">
					<Profile />
				</Route>

				
			</Switch>
		</div>
	)
}