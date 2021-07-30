import './App.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


// import MessageList from './components/messageList/MessageList';
// import InputForm from './components/inputForm/InputForm';
import ChatList from './components/chatList/ChatList';
import Chat from './components/chat/Chat';




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

	return (
		<div className="App">
			<div className="chatlist">
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
