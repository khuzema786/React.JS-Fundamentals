import React from 'react'

// function Greet() {
//   return <h1>Hello Vishwas</h1>
// }


// Arrow funstions are JS ES6
const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  )
}

// -----Destructuring props in function parameter, approach 1-----
// const Greet = ({name,heroName}) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//       {props.children}
//     </div>
//   )
// }

// ----Destructure props by extraction, approach 2----
// const Greet = (props) => {
//   const {name, heroName} = props
//   const {state1,state2} = this.state // Destructuring states if used
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//       {props.children}
//     </div>
//   )
// }

export default Greet