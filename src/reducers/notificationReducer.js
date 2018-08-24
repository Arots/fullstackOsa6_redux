const initialState = ''
const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
	case 'MESSAGE':
		return `'${action.content}' has been added to the list.`
	case 'NOTIFICATIONVOTE':
		return `You voted for '${action.content}'.`
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