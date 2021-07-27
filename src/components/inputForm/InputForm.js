import style from './InputForm.css';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


function InputForm(props) {
	

	const handleChangeText = (event) => {
		props.setText(event.target.value);
	}

	const handleMessagePushed = (event) => {
		event.preventDefault();
		
		const preparedMessage = {
			id: getLastItemId(props.messageList) + 1,
			author: 'User',
			text: props.text
		}
		props.setMessageList([
			...props.messageList,
			preparedMessage
		])
		props.setText('');
	}

	const getLastItemId = (arr) => {
		const lastItem = arr[props.messageList.length - 1];
		if (lastItem) return lastItem.id;
		return 1;
	}

	return (
		<form onSubmit={handleMessagePushed} className="form">
			<TextField
				inputRef={ input => input && input.focus() }
				label="Text"
				color="primary" 
				autoFocus
				value={props.text}
				onChange={handleChangeText}
			/>
			<IconButton type="submit">
				<SendOutlinedIcon />
			</IconButton>
		</form>
	);
}


export default InputForm;