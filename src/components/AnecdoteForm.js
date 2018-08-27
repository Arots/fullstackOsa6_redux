import React from 'react'
import { anecdoteCreator } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear } from '../reducers/notificationReducer';

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    this.props.store.dispatch(anecdoteCreator(content))
    this.props.store.dispatch(notificationChange(content))
    setTimeout(() => {
      this.props.store.dispatch(notificationClear())
    }, 3000)
  
    e.target.anecdote.value = ''
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

export default AnecdoteForm
