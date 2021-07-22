import './App.css';
import React, { useState, useEffect } from 'react';


import MessageList from './components/messageList/MessageList';
import InputForm from './components/inputForm/InputForm';
import ChatList from './components/chatList/ChatList';


function App() {
	
	const [chatList, setChatList] = useState([
		{
			id: '236ghjgjh23gjh2',
			name: 'Bot'
		},
		{
			id: 'fjejkbbras32h23',
			name: 'Rick'
		},
		{
			id: 'n43n43kj334kjh4',
			name: 'Dungeon Master'
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
				/>
			</div>


			
			<div className="chat">
				<MessageList list={messageList} />
				
				<InputForm
					text={text}
					setText={setText}
					setMessageList={setMessageList}
					messageList={messageList}
				/>
			</div>
			

		</div>
	);
}

export default App;
