import React from 'react'
import { anecdoteCreator } from '../reducers/anecdoteReducer'
import { notificationChange, notificationClear } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    e.target.anecdote.value = ''
    this.props.anecdoteCreator(content)
    this.props.notificationChange(content, 3)
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
  notificationChange
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm)
