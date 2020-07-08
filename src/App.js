import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Dummy Helloworld! functional component */}
        <Hello />

        {/* Adding props.children to a component -- FUNCTIONAL COMPONENT*/}
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman" />

        {/* Adding props to component -- CLASS COMPONENT */}
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" />

        {/* Shows State in classes */}
        <Message message='Welcome Visitor' />
        <Message message='Welcome Guest' />
        
        {/* Counter Class */}
        <Counter />

        {/* Event Handling */}
        <ClassClick />

        {/* Event Binding */}
        <EventBind />

        {/* Methods as props */}
        <ParentComponent />

        {/* Conditional Rendering */}
        <UserGreeting />

      </div>
    )
  }
}

export default App