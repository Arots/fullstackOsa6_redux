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

export const notificationChange = (notification, timeout) => {
	return async (dispatch) => {
		dispatch({
			type: 'MESSAGE',
			content: notification
		})
		setTimeout(() => {
			dispatch({
				type: 'CLEAR'
			})
		}, timeout * 1000)
	}
}

export const voteNotification = (notification, timeout) => {
	return async (dispatch) => {
		dispatch({
			type: 'NOTIFICATIONVOTE',
			content: notification
		})
		setTimeout(() => {
			dispatch({
				type: 'CLEAR'
			})
		}, timeout * 1000)
	}
}

/*export const notificationClear = () => {
	return {
		type: 'CLEAR'
	}
}*/

export default notificationReducer