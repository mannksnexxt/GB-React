import styles from './ChatList.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function ChatList(props) {
	
	return (
		<List component="nav">
			{
				props.lists.map(list => {
					return  <Link to={`/chats/${list.id}`} key={list.id}>
								<ListItem
									button
									selected={ list.id === props.current }>
										<ListItemText primary={list.name} />	
								</ListItem>
							</Link>
				})
			}		
		</List>
	);
}

export default ChatList;