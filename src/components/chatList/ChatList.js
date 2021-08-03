import styles from './ChatList.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { useSelector } from 'react-redux';
import { chatsSelector } from '../../selectors/chats';

function ChatList(props) {
	const { chats } = useSelector(chatsSelector)

	return (
		<List component="nav">
			{
				chats.map(list => {
					return  <Link to={`/chats/${list.id}`} key={list.id}>
								<ListItem
									button
									selected={ list.id === props.currentChatId }>
										<ListItemText primary={list.name} />	
								</ListItem>
							</Link>
				})
			}		
		</List>
	);
}

export default ChatList;