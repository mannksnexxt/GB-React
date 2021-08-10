import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'

import ChatList from '../chatList/ChatList';
import Chat from '../chat/Chat';

import { chatsSelector } from '../../selectors/chats'
import { addChat } from '../../actions/chats'



function Home(props) {
	const dispatch = useDispatch();
	const { chats } = useSelector(chatsSelector)
	const { chatId } = useParams();
	const [ chatName, setChatName ] = useState('');

	function handleChangeChatName(event) {
		setChatName(event.target.value);
	}
	
	function handleAddChat(event) {
		event.preventDefault();
		dispatch( addChat(chatName) );
		setChatName('');
	}

	const chatIsExists = Boolean(chats.find( chat => chat.id === chatId ));

	return (
		<div className="App">
			<div className="chatlist">
				<ChatList currentChatId={chatId} />
				<form className="add-form" onSubmit={handleAddChat}>
					<input
						type="text"
						placeholder="Enter chat name"
						value={chatName}
						onChange={handleChangeChatName}/>
					<button type="submit">Добавить</button>
				</form>
				
			</div>

			{
				chatId ?
					chatIsExists ?
					<Chat chatId={chatId} />
					:
					<div className="chat chat--empty">
						<h1>Chat not found</h1>
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

export default Home;