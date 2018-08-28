import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, notificationClear } from '../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
	
	render() {
		return (
			<div>
				<h2>Anecdotes</h2>
				<Filter store={this.props.store} />
				{this.props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
					<div className="anecdote" key={anecdote.id}>
						<div>
							{anecdote.content}
						</div>
						<div>
              has {anecdote.votes}
							<button className="voteButton" 
								onClick={() => {
									this.props.voteAnecdote(anecdote.id)
									this.props.voteNotification(anecdote.content)
									setTimeout(() => {
										this.props.notificationClear()}, 5000)}}>
                vote
							</button>
						</div>
					</div>
				)}
			</div>
		)
	}
}

const anecdotesToShow = (anecdotes, filtering) => {
	if (filtering) {
		return anecdotes
	}
	else {
		return anecdotes.filter(anecdote => 
			anecdote.content.toLowerCase().includes(filtering.toLowerCase()))
	}
}

const mapStateToProps = (state) => {
	return {
		visibleAnecdotes: anecdotesToShow(state.anecdotes, state.filter)
	}
}

const mapDispatchToProps =  {
	voteAnecdote,
	voteNotification,
	notificationClear
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AnecdoteList)
