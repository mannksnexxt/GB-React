import './App.css';
import Message from './components/message/Message';
import React, { useState, useEffect } from 'react';


function App() {
	const [messageList, setMessageList] = useState([]);
	
	const [text, setText] = useState('');
	

	useEffect(() => {
		if (messageList.length) {
			const lastAuthor = messageList[messageList.length - 1].author;
			if (lastAuthor !== 'Bot') {
				const botMessage = {
					id: getLastItemId(messageList),
					isBot: true,
					author: 'Bot',
					text: `${lastAuthor}, hello!`
				}
				setMessageList([
					...messageList,
					botMessage
				])
			}
		}
	}, [messageList])

	const handleChangeText = (event) => {
		setText(event.target.value);
	}

	const handleMessagePushed = (event) => {
		event.preventDefault();
		
		const preparedMessage = {
			id: getLastItemId(messageList),
			author: 'User',
			text
		}
		setMessageList([
			...messageList,
			preparedMessage
		])
		setText('');
	}
	

	const getLastItemId = (arr) => {
		const lastItem = arr[messageList.length - 1];
		if (lastItem) return lastItem.id;
		return 1;
	}

	return (
		<div className="App">
			<div className="messages">
				{
					messageList.map(message => {
						return <Message
							author={message.author}
							text={message.text} 
							key={message.id}
							isBot={message.isBot}
						></Message>
					})
				}
			</div>

			<form onSubmit={handleMessagePushed} className="form">
				<input className="input" type="text" value={text} onChange={handleChangeText} placeholder="Text" />
				<input type="submit" className="button" value="Send"/>
			</form>

		</div>
	);
}

export default App;
