import './App.css';
import React, { useState, useEffect } from 'react';


import MessageList from './components/messageList/MessageList';
import InputForm from './components/inputForm/InputForm';
import ChatList from './components/chatList/ChatList';


function App(props) {
	
	const [chatList, setChatList] = useState([
		{
			id: '236ghjgjh23gjh2',
			name: 'Bot',
			chatHistory: [
				{
					name: 'Trevor',
					text: 'Hello, im Trevor',
					isBot: false,
				},
				{
					name: 'User',
					text: 'Hello, im Trevor',
					isBot: false,
				}
			]
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


	const [messageList, setMessageList] = useState([]);
	const [text, setText] = useState('');
	

	useEffect(() => {
		if (messageList.length) {
			const lastAuthor = messageList[messageList.length - 1].author;
			if (lastAuthor !== 'Bot') {
				const botMessage = {
					id: getLastItemId(messageList) + 1,
					isBot: true,
					author: 'Bot',
					text: `${lastAuthor}, hello!`
				}
				setTimeout(() => {
					setMessageList([
						...messageList,
						botMessage
					])
				}, 1000);
			}
		}
	}, [messageList])


	const getLastItemId = (arr) => {
		const lastItem = arr[messageList.length - 1];
		if (lastItem) return lastItem.id;
		return 1;
	}

	return (
		<div className="App">
			<div className="chatlist">
				<ChatList
					lists={chatList}
					current={props.current}
				/>
			</div>

			{
				props.current ?
				<div className="chat">
					<MessageList list={ chatList.find( chat => {
						return chat.id === props.current;
					}).chatHistory } />

					<InputForm
						text={text}
						setText={setText}
						setMessageList={setMessageList}
						messageList={messageList}
					/>
				</div>
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
