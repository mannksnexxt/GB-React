import style from './Message.css';

function Message(props) {

	return (
		<div className={`message ${props.isBot ? 'bot-message' : ''} `}>
			<p>{ props.text }</p>
		</div>
	);
}


export default Message;