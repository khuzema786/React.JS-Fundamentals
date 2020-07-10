import React, { Component } from 'react'

class HoverCounterTwo extends Component {

	render() {
		const { count, incrementCount, name } = this.props
    return <h2 onMouseOver={incrementCount}>{name} Hovered {count} times</h2>
	}
}

export default HoverCounterTwo