// SNIPPETS USED FOR ADDING COMPONENT ---- rce
// SNIPPETS USED FOR ADDING CONSTRUCTOR ---- rconst

import React, { Component } from 'react'

class EventBind extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Hello'
    }
    // --- Approach 3, suggested approach
    // this.clickHandler = this.clickHandler.bind(this)
  }

  // clickHandler() {
  //   console.log(this)
  //   this.setState({message: 'Goodbye'})
  // }

  // ---- Approach 4, suggested approach
  clickHandler = () => {
    this.setState({message:'Goodbye'})
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Approach 1 & 2, not suggested */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind