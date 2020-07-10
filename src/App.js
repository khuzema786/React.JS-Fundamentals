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
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'
import Table from './components/Table'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import CounterRender from './components/CounterRender'
import { UserProvider } from './components/UserContext'
import ComponentC from './components/ComponentC'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Dummy Helloworld! functional component */}
        <Hello />

        {/* Adding props.children to a component -- FUNCTIONAL COMPONENT --- Using Destructuring/Destructing*/}
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

        {/* List Rendering Using Maps */}
        <NameList />

        {/* CSS Stylesheet, Preffered Styling Approach */}
        <Stylesheet primary= {true} />

        {/* Inline Styling */}
        <Inline />

        {/* CSS Module Styling --- Note: appStyles.css (Accessed Globally) & appStyles.module.css (Needs to be imported for use with a particular component) in src */}
        <h1 className='error'>Error</h1> 
        <h1 className={styles.success}>Success</h1>

        {/* CSS in JS Libraries (Styled Components) --- like Semantic UI React, Reactstrap (Bootstrap for React) etc */}

        {/* Basics of form handling */}
        <Form />

        {/* Lifecyle of Mounting & Updating Components */}
        <LifecycleA />

        {/* React.Fragment prevents extra wrapper node from being added to DOM */}
        <FragmentDemo />

        {/* Table Columns Using React.Fragment as Wrapper */}
        <Table />

        {/* PureComponent --- Will not be re-rendered if state or props are same*/}
        <ParentComp />

        {/* ReactRefs --- For forms */}
        <RefsDemo />

        {/* Refs with Class Components --- For functional components you can use refs forwarding below */}
        <FocusInput />

        {/* Refs Forwarding from parent to FUNCTIONAL child components */}
        <FRParentInput />

        {/* React Portal ---> To render a portal in index.html DOM apart from root div --- Notice the div with portal-root as it's ID made by us */}
        <PortalDemo />

        {/* Error handling phase method --- Error boundary ---> A class components implementing either one or both of lifecycle methods */}
        {/* Error boundary is primarily used in developement phase, In realy we want to make Error as highly visible as possible, So you would find a Cross (Close) button on top right */}
        {/* Making seperate ErrorBoundaries to ensure that the entire UI doesn't fallback just by error in a part of component */}
        {/* Uncomment the lines below for usage */}
        
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>  
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}

        {/* Sharing Common Functionality Between Components by HOC or Render Props Approach */}

        {/* HigherOrderComponents - 1 */}
        {/* HighOrderComponent HOC - 2 ---> EnhancedComponent= UpdatedComponent(OriginalComponent) Eg: Iron-man = withSuit(TonyStark) */}
        {/* Here HOC is WithCounter and the props are passed in HOC firstly and then into it's wrapped component */}
        <ClickCounter name="Khuzema" />
        <HoverCounter />

        {/* Render Props --- Note: you can pass props with prop name as render, it wonn't conflict with render class method*/}
        {/* Render props refer to a technique for sharing code between react components using a prop whose value is a function */}
        {/* Below is jus a fundamental basic idea of passing functions as props */}
        <ClickCounterTwo />
        <HoverCounterTwo />
        <User render={(isLoggedIn)=>isLoggedIn ? "Khuzema" : "Guest"} />
        {/* Below is an actual example of render props concept */}
        {/* <CounterRender
          render={(count, incrementCount)=>(
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )} 
        />
        <CounterRender
          render={(count, incrementCount)=>(
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )} 
        /> */}
        {/* You can also pass props as children to remove render prop name */}
        <CounterRender>
          {(count, incrementCount)=>(
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </CounterRender>
        <CounterRender name="Khuzema">
          {(count, incrementCount, name)=>(
            <HoverCounterTwo name={name} count={count} incrementCount={incrementCount} />
          )}
        </CounterRender>

        {/* Context --- It provides a way to "pass down the data through the component tree" without having to pass props down "manually at every level" */}
        {/* In this example we consider a tree with component C at top then E & then F at bottom, We have to pass props to F without passing them into C & E */}
        {/* 3 Steps in Context ---> 1. Create the context (UserContext.js) ---> 2. Provide the context value ---> 3. Consume the context value */}
        <UserProvider value="Khuzema">
          <ComponentC />
        </UserProvider>
        
        {/* Notice the default value being consumed from UserContext.js since Matching provider is not used */}
        <ComponentC />

      </div>
    )
  }
}

export default App