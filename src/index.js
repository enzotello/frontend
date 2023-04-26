/* import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
 


  if(props.allClicks.length === 0)
  return(
    <div>
      <p>No feedback given</p>
    </div>
  )

  return(
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>total {props.total}</p>
      <p>average{props.average}</p>
      <p>positive {props.positive} %</p>
    </div>
  )
  
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleGoodClick = () => {
    setAllClicks(allClicks.concat(1))
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setAllClicks(allClicks.concat(0))
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setAllClicks(allClicks.concat(-1))
    setBad(bad + 1)
  }
  const num = (allClicks.reduce((a, b) => a + b, 0)) 
  const large = (allClicks.length)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good"  />
      <Button onClick={handleNeutralClick} text="neutral"  />
      <Button onClick={handleBadClick} text="bad" />
      <Statistics good={good} 
      neutral={neutral} 
      bad={bad} 
      allClicks={allClicks.join(" ")} 
      total = {allClicks.length}
      average={(Math.floor(num)/10)} 
      positive={(num / large )}
      />

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
) */



import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import "../src/index.css"






ReactDOM.render(<App />, document.getElementById('root'))




