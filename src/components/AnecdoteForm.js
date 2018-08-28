import React from 'react'
import { anecdoteCreator } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import noteService from '../services/anecdotes'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    const newAnecdote = await noteService.newAnecdote(content)
    this.props.anecdoteCreator(newAnecdote)
    this.props.notificationChange(content)
    setTimeout(() => {
      this.props.notificationClear()
    }, 3000)
  }

   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote' className="input" /></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

const mapDispatchToProps = {
  anecdoteCreator,
  notificationChange,
  notificationClear
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
