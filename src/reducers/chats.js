import { CHANGE_HISTORY } from '../actions/chats'

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
			chat.chatHistory = action.payload.history;
			return state.chats
		}
		default:
            return state
	}
}