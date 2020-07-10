import React from 'react'

// CreateContext method is from react to create context
const UserContext = React.createContext("I'm default value & displayed (Consumed) only when the component does not a a matching PROVIDER in the component tree")

// Every context created using createContext comes with a provider & a Consumer react component which is needed to be exported for step 2 & 3
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}

// This exported user context would be used in ComponentE.js
export {UserContext}