import React, { Component } from 'react'

// ---- Event Handling using Class -----
class ClassClick extends Component {

  clickHandler() {
    console.log('Clicked the button')
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    )
  }
}


// ---- Event Handling using function -----
// function FunctionClick() {
//     function ClickHandler() {
//         console.log('Clicked the Button')
//     }

//     return (
//         <button onClick={ClickHandler}>Click</button>  // -----> Note: onClick={ClickHandler()}  ----> This is wrong, it gives function call in the start itself.
//     )
// }

export default ClassClick