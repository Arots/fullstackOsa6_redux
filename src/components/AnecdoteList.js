import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, notificationClear } from '../reducers/notificationReducer';

class AnecdoteList extends React.Component {

	dispatchBoth = (anecdote) => {
		console.log(anecdote)
		this.props.store.dispatch(voteAnecdote(anecdote))
		this.props.store.dispatch(voteNotification(anecdote))
	}
	
	render() {
		const anecdotes = this.props.store.getState().anecdotes
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
							<button className="voteButton" 
								onClick={() => {
									this.props.store.dispatch(voteAnecdote(anecdote.id));
									this.props.store.dispatch(voteNotification(anecdote.content));
									setTimeout(() => {
										this.props.store.dispatch(notificationClear())}, 5000)}}>
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
