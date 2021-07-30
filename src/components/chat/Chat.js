import styles from './Chat.css';
import React, { useState, useEffect } from 'react';


import MessageList from '../messageList/MessageList';
import InputForm from '../inputForm/InputForm';

function Chat(props) {

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
					]);
				}, 1000);
			}

			props.setChatList( props.chatList.map(chat => {
				if (chat.id === props.chatId) {
					console.log(props.chatId, { ...chat, chatHistory: messageList });
					return { ...chat, chatHistory: messageList };
				}
				return chat;
			}) )
		}
	}, [messageList])

	useEffect(() => {
		const history = props.chatList.find(chat => {
			return chat.id === props.chatId;
		}).chatHistory;

		setMessageList(history);

		
	}, [props.chatId] )


	const getLastItemId = (arr) => {
		const lastItem = arr[messageList.length - 1];
		if (lastItem) return lastItem.id;
		return 1;
	}


	return (
		<div className="chat">
			<MessageList list={ props.chatList.find( chat => {
				return chat.id === props.chatId;
			}).chatHistory } />

			<InputForm
				text={text}
				setText={setText}
				setMessageList={setMessageList}
				messageList={messageList}
			/>
		</div>
	)
}


export default Chat;