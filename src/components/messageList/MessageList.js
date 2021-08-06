import style from './MessageList.css';
import Message from '../message/Message';

function MessageList(props) {
	return (
		<div className="messages">
			{
				props.list.map(message => {
					return <Message
						author={message.author}
						text={message.text} 
						key={message.id}
						isBot={message.isBot}
					></Message>
				})
			}
		</div>
	);
}


export default MessageList;