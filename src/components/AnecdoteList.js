import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'

class AnecdoteList extends React.Component {
	render() {
		const anecdotes = this.props.store.getState()
		return (
			<div>
				<h2>Anecdotes</h2>
				{anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
					<div className="anecdote" key={anecdote.id}>
						<div>
							{anecdote.content}
						</div>
						<div>
              has {anecdote.votes}
							<button className="voteButton" onClick={() => 
								this.props.store.dispatch(voteAnecdote(anecdote.id))
							}>
                vote
							</button>
						</div>
					</div>
				)}
			</div>
		)
	}
}

export default AnecdoteList
