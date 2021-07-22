import styles from './ChatList.css';
import React, { useState } from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function ChatList(props) {
	const fisrtId = props.lists[0].id;
	const [currentChatId, setCurrentChatId] = useState(fisrtId);

	const handleChangeChatId = function(id) {
		setCurrentChatId(id);
	}

	return (
		<List component="nav">
			{
				props.lists.map(list => {
					return  <ListItem
								button
								key={list.id}
								selected={ list.id === currentChatId }
								onClick={ handleChangeChatId.bind(null, list.id) }>
								<ListItemText primary={list.name} />	
							</ListItem>
				})
			}		
		</List>
	);
}

export default ChatList;