
import React from 'react'

function Columns() {
    
  const items = [
      {
        id: 1,
        title: 'hello this is just a test list to show React.Fragment use in mapping of list'
      }
  ]
  return (
    // --- Empty opening & closing tag means React.Fragment ---
    <>
    {/* To show React.Fragment use in mapping of list --- This will throw a warning but ignore for now */}
      {
          items.map((item) => (
              <React.Fragment key={item.id}>
                  <h1>Title</h1>
                  <p>{item.title}</p>
              </React.Fragment>
          ))
      }
      <td>Name</td>
      <td>Vishwas</td>
    </>
  )
}

export default Columns