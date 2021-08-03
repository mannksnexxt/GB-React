export const CHANGE_HISTORY = 'CHATS::CHANGE_HISTORY'


export const changeHistory = (chatId, history) => ({
    type: CHANGE_HISTORY,
    payload: {
        history,
		chatId
    },
})
