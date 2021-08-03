import './App.css';
import React, { useState } from 'react';

import Router from '../../Router';




function App() {
	
	const [chatList, setChatList] = useState([
		{
			id: '236ghjgjh23gjh2',
			name: 'Bot',
			chatHistory: []
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

	return (
		<Router
			chatList={chatList}
			setChatList={setChatList}
		/>
	);
}

export default App;
