import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'
import WithCounter from './WithCounter'

class ClickCounter extends Component {

    render() {
      const { count, incrementCount } = this.props
          return <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
      }
  }
  
export default WithCounter(ClickCounter, 5) // UpdatedCoponent(OriginalComponent)

// class ClickCounter extends Component {

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
    
//     render() {
//         const {count} = this.state
//         return (
//             <button onClick={this.incrementCount}>{this.props.name} Clicked {count} Times</button>
//         )
//     }
// }

// export default UpdatedComponent(ClickCounter) 
