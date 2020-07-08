// SNIPPETS USED FOR ADDING COMPONENT ---- rce
import React, {Component} from 'react';

class Counter extends Component {

    constructor() {
      super()
      this.state = {
        count: 0
      }
    }
  
    increment() {
      this.setState((prevState) => ({
        count: prevState.count + 1  // ----> Stores the previous state to avoid redundant function call ignorance issue
      }))
      // this.setState({
      //   count: this.state.count + 1
      // }, () => {
      //   console.log('Callback', this.state.count)  // ---> Implement you set state functions in this callback functions for accuracy
      // })
      // this.state.count = this.state.count + 1
      // console.log(this.state.count)
    }
  
    incrementFive() {
      console.log('Inside incrementFive')
      this.increment()
      this.increment()
      this.increment()
      this.increment()
      this.increment()
    }
  
    render() {
      return (
        <div>
          <div>Count - {this.state.count}</div>
          <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
      )
    }
  }
  
  export default Counter
