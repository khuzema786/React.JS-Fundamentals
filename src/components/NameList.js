import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Khuzema','Adarsh', 'Lakshita', 'Disha', 'Oishik', 'Adarsh']
    const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
    ]

    // ---- Approach 1, using JSX inside Map function ----
    // const personList = persons.map(
    // person => <h2>I'm {person.name}, {person.age} years old, I know {person.skill} </h2>
    // )

    // ---- Approach 2 (Preffered), using a component Person.js with JSX used in it with props (person as a parameter) passed from Map function ----
    // const personList = persons.map(person => <Person person={person} />)

    // Including a UNIQUE KEY is must to eliminate inefficient update, It helps react identify which elements are changed, added or removed
     const personList = persons.map(person => <Person key={person.id} person={person} />) 
    
    //---- Approach 3, used when no unique key is present in list, NEVER USE THIS---
    //--- If no unique key is there, If list is static, If no ordereing or filtering in list is going to take place then only you may use but better to avoid
    //const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2> )

    return (
        <div>
            {/* --- Refer Person.js --- */}
            {personList} 
            {/* {nameList}  */}
        </div>
    )
}


// --- Basic Implementation ---
// function NameList() {
//     const names = ['Khuzema','Adarsh', 'Lakshita', 'Disha', 'Oishik']
//     const nameList = names.map(name => <h2>{name}</h2>)

//     return (
//         <div>
//          {
//             //  names.map(name => <h2>{name}</h2>)
//             nameList
//          }   
//         </div>
//     )
// }

export default NameList