import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, notificationClear } from '../reducers/notificationReducer'
import Filter from './Filter'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {

	dispatchBoth = (anecdote) => {
		console.log(anecdote)
		this.props.voteAnecdote(anecdote)
		this.props.voteNotification(anecdote)
	}
	
	render() {
		const { anecdotes, filter } = this.props
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
									this.props.voteAnecdote(anecdote.id);
									this.props.voteNotification(anecdote.content);
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

const mapStateToProps = (state) => {
	return {
		anecdotes: state.anecdotes,
		filter: state.filter
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
