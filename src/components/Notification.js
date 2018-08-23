import React from 'react'

class Notification extends React.Component {
	render() {
		const style = {
			border: '2px solid',
			padding: 10,
			borderWidth: 1
		}
		return (
			<div  className="virhe" style={style}>
        render here notification...
			</div>
		)
	}
}

export default Notification
