import style from './Message.css';

function Message(props) {
	return (
		<p className="Message">
			Message: { props.text }
		</p>
	);
}


export default Message;