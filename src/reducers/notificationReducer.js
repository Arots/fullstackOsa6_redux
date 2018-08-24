const initialState = ''
const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'MESSAGE':
		state = `${action.content} has been added to the list`
		return state
	case 'NOTIFICATIONVOTE':
		state = `you voted for ${action.content}`
		return state
	case 'CLEAR':
		return ''
	default:
		return state
	}

}

export const notificationChange = (notification) => {
	return {
		type: 'MESSAGE',
		content: notification
	}
}

export const voteNotification = (notification) => {
	return {
		type: 'NOTIFICATIONVOTE',
		content: notification
	}
}

export const notificationClear = () => {
	return {
		type: 'CLEAR'
	}
}

export default notificationReducer