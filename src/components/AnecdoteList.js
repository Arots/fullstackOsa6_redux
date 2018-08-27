import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, notificationClear } from '../reducers/notificationReducer'
import Filter from './Filter'

class AnecdoteList extends React.Component {

	dispatchBoth = (anecdote) => {
		console.log(anecdote)
		this.props.store.dispatch(voteAnecdote(anecdote))
		this.props.store.dispatch(voteNotification(anecdote))
	}
	
	render() {
		const { anecdotes, filter } = this.props.store.getState()
		const anecdotesToShow =
			anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
		return (
			<div>
				<h2>Anecdotes</h2>
				<Filter store={this.props.store} />
				{anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
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
