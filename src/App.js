import React from 'react'
import Notification from './components/Notification'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import './styles.css'

class App extends React.Component {

	render() {
		const anecdotes = this.props.anecdotes
		return (
			<div>
				<h1>Programming anecdotes</h1>
				<Notification />
				<AnecdoteList />
				<AnecdoteForm />
			</div>
		)
	}
}

export default App