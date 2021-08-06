export const CHANGE_HISTORY = 'CHATS::CHANGE_HISTORY'
export const ADD_CHAT = 'CHATS::ADD_CHAT'


export const changeHistory = (chatId, message) => ({
    type: CHANGE_HISTORY,
    payload: {
        message,
		chatId
    },
})

export const addChat = (chatName) => ({
	type: ADD_CHAT,
    payload: {
        chatName
    },
})

export const changeHistoryWithThunk = (chatId, message) => {
    return (dispatch, getState) => {
			dispatch(changeHistory(chatId, message));
			
			if (!message.isBot) {
				setTimeout(() => {
					const botMessage = {
						id: Date.now(),
						author: 'Bot',
						text: 'Hello!',
						isBot: true
					}
					dispatch(changeHistory(chatId, botMessage));
				}, 1000)
			}
    }
}
