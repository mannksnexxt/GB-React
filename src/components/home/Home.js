import React from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux'

import ChatList from '../chatList/ChatList';
import Chat from '../chat/Chat';

import { changeHistory } from '../../actions/chats'
import { chatsSelector } from '../../selectors/chats'



function Home(props) {
	const dispatch = useDispatch();
	const { chats } = useSelector(chatsSelector)

	const { chatId } = useParams();

	const chatIsExists = Boolean(chats.find( chat => chat.id === chatId ));

	return (
		<div className="App">
			<div className="chatlist">
				<ChatList currentChatId={chatId} />
			</div>

			{
				chatId ?
					chatIsExists ?
					<Chat 
						chatList={chats}
						chatId={chatId}
						setChatList={props.setChatList}
					/>
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