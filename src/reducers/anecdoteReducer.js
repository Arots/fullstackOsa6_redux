import anecdoteService from '../services/anecdotes'

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
	return async (dispatch) => {
		const newAnecdote = await anecdoteService.newAnecdote(anecdote)

		dispatch({
			type: 'CREATE',
			data: newAnecdote
		})
	}
}

export const voteAnecdote = (anecdote) => {
	return async (dispatch) => {
		const updatedAnecdote = await anecdoteService.changeAnecdote(anecdote)
		console.log(updatedAnecdote)
		dispatch({
			type: 'VOTE',
			data: updatedAnecdote
		})
	}
}

export const anecdoteInitialization = () => {
	return async (dispatch) => {
		const anecdotes = await anecdoteService.getAll()
		dispatch({
			type: 'INIT',
			data: anecdotes
		})
	}
}

export default anecdoteReducer