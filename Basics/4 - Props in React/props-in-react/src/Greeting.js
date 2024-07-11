import React from 'react'

const Greeting = (props) => {
  return (
    <div>
        <h1>Hello, {props.name}</h1>
        <p>Welcome to the React tutorial.</p>
    </div>
  )
}

export default Greeting