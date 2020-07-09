import React from 'react'

// Accept HeroName as props
function Hero ({ heroName }) {
   // --- If heroName is joker, throw an error
  if (heroName === 'Joker') {
    throw new Error(' Not a hero!')
  }
  return <h1>{heroName}</h1>
}

export default Hero