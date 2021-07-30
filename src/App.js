import './App.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { connect, useDispatch, useSelector } from 'react-redux'
import { changeName } from './actions/profile'
import { bindActionCreators } from 'redux'

import ChatList from './components/chatList/ChatList';
import Chat from './components/chat/Chat';


const mapStateToProps = (state) => {
    return state.profile
}



function App() {
	
	const [chatList, setChatList] = useState([
		{
			id: '236ghjgjh23gjh2',
			name: 'Bot',
			chatHistory: []
		},
		{
			id: 'fjejkbbras32h23',
			name: 'Rick',
			chatHistory: []
		},
		{
			id: 'n43n43kj334kjh4',
			name: 'Dungeon Master',
			chatHistory: []
		},
	]);

	const { chatId } = useParams();

	const dispatch = useDispatch()
    const { name, age } = useSelector((state) => state.profile)

	const handleNameSubmit = (newName) => {
        dispatch(changeName(newName))
    }

	return (
		<div className="App">
			<div className="chatlist">
				<input type="text" onSubmit={handleNameSubmit} value={name}/>
				<ChatList
					lists={chatList}
					current={chatId}
				/>
			</div>

			{
				chatId ?
				<Chat 
					chatList={chatList}
					chatId={chatId}
					setChatList={setChatList}
				/>
				:
				<div className="chat chat--empty">
					<h1>Not selected chat</h1>
					<h2>Select chat from the left bar</h2>
				</div>
			}

		</div>
	);
}

export default App;
