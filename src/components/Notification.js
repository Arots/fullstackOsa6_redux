import React from 'react'

class Notification extends React.Component {
	render() {
		const style = {
			border: '2px solid',
			padding: 10,
			borderWidth: 1
		}
		return (
			<div>
				{this.props.store.getState().notification ?
					<div className="virhe" style={style}> 
						{this.props.store.getState().notification}
					</div> :
					<div/>}
			</div>
		)
	}
}

export default Notification
