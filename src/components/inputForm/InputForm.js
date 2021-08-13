import style from './InputForm.css';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeHistoryWithThunk } from '../../actions/chats';



function InputForm(props) {
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const handleChangeText = (event) => {
		setText(event.target.value);
	}

	const handleMessagePushed = (event) => {
		event.preventDefault();
		
		const preparedMessage = {
			id: Date.now(),
			author: 'User',
			text: text
		}

		dispatch(changeHistoryWithThunk(props.chatId, preparedMessage))
		setText('');
	}

	return (
		<form onSubmit={handleMessagePushed} className="form">
			<TextField
				label="Text"
				color="primary" 
				autoFocus
				value={text}
				onChange={handleChangeText}
			/>
			<IconButton type="submit">
				<SendOutlinedIcon />
			</IconButton>
		</form>
	);
}


export default InputForm;