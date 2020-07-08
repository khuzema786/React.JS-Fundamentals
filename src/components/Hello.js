import React from 'react'

const Hello = () => {
  return (
    // This is JSX, Makes coding easier and elegant-----
    <div className='dummyClass'>
      <h1>Helloworld!</h1>
    </div>
  )

  // ----- This is React JS -----

  // return React.createElement(        
  //   'div',
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement('h1', null, 'Hello Vishwas')
  // )
}

export default Hello