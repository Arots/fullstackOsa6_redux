import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
	render() {
		const style = {
			border: '2px solid',
			padding: 10,
			borderWidth: 1
		}
		return (
			<div>
				{this.props.notifications ?
					<div className="virhe" style={style}> 
						{this.props.notifications}
					</div> :
					<div/>}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		notifications: state.notifications
	}
}

export default connect(
	mapStateToProps
)(Notification)
