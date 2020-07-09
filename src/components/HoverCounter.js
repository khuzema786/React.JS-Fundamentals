import React, { Component } from 'react'
import WithCounter from './WithCounter'
import UpdatedComponent from './WithCounter'

class HoverCounter extends Component {

	render() {
		const { count, incrementCount } = this.props
		return <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
	}
}

export default WithCounter(HoverCounter, 10)

// class HoverCounter extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              count:0
//         }
//     }

//     incrementCount = () => {
//         this.setState(prevState =>{
//             return {count: prevState.count +1}
//         })
//     }

// 	render() {
//         const {count} = this.state
// 		return <h2 onMouseOver={this.incrementCount}>{this.props.name} Hovered {count} times</h2>
// 	}
// }
// export default UpdatedComponent(HoverCounter)
