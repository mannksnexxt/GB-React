import styles from './Chat.css';
import React from 'react';

import MessageList from '../messageList/MessageList';
import InputForm from '../inputForm/InputForm';

import { useSelector } from 'react-redux';
import { chatsSelector } from '../../selectors/chats';

function Chat(props) {
	const { chats } = useSelector(chatsSelector)
	const currentChat = chats.find( chat => {
		return chat.id === props.chatId;
	});

	return (
		<div className="chat">
			<MessageList list={ currentChat?.chatHistory } />
			<InputForm
				chatId={props.chatId}
			/>
		</div>
	)
}


export default Chat;