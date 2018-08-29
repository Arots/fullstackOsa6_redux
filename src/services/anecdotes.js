import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

const newAnecdote = async (content) => {
	const response = await axios.post(baseUrl, {content, votes: 0})
	return response.data
}

const changeAnecdote = async (anecdote) => {
	const newAnecdote = {
		content: anecdote.content,
		id: anecdote.id,
		votes: anecdote.votes + 1
	}
	const response = await axios.put(`${baseUrl}/${anecdote.id}`, newAnecdote)
	return response.data
}

const remove = async (id) => {

}

export default { getAll, newAnecdote, changeAnecdote, remove }