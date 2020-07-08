import React from 'react'

// ---Arrow Function ---
const ChildComponent = (props) => {

    return (
       <div>
         <button onClick={ () => props.greetHandler('Child')}>Greet Parent</button>
       </div>
     )

    // return (
    //   <div>
    //     <button onClick={props.greetHandler}>Greet Parent</button>
    //   </div>
    // )
  }

// --- Normal Function ---
// function ChildComponent(props) {
//     return (
//         <div>
//             <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
//         </div>
//     )
// }

export default ChildComponent