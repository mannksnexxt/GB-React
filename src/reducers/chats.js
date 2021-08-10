import { CHANGE_HISTORY, ADD_CHAT } from '../actions/chats'

const initialState = {
	chats: [
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
		}
	]
}

export default function reduser(state = initialState, action) {
	switch (action.type) {
		case CHANGE_HISTORY: {
			const chat = state.chats.find(chat => chat.id === action.payload.chatId);

			chat.chatHistory.push(action.payload.message);
			return {
				chats: [
					chat,
					...state.chats.filter(ch => ch.id !== chat.id)
				]
			}
		}
		case ADD_CHAT: {
			return {
				chats: [
					...state.chats,
					{
						id: String(Date.now()),
						name: action.payload.chatName,
						chatHistory: []
					}
				],
			}
		}
		default:
            return state;
	}
}