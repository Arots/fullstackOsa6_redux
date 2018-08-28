const anecdoteReducer = (store = [], action) => {
	switch (action.type) {
	case 'VOTE':
		const id = action.data.id
		const old = store.filter(a => a.id !== id)
		const voted = store.find(a => a.id === id)

		return [...old, { ...voted, votes: voted.votes+1} ]
    
	case 'CREATE':

		return [...store, { content: action.data.content, 
			id: action.data.id, votes: action.data.votes }]
	
	case 'INIT':
		return action.data
	default:
		return store
	}
}

export const anecdoteCreator = (anecdote) => {
	return {
		type: 'CREATE',
		data: {
			content: anecdote.content,
			id: anecdote.id,
			votes: anecdote.votes
		}
	}
}

export const voteAnecdote = (id) => {
	return {
		type: 'VOTE',
		data: {
			id
		}
	}
}

export const anecdoteInitialization = (data) => {
	return {
		type: 'INIT',
		data
	}
}

export default anecdoteReducer