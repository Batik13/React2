import React from 'react'

export default props => (
  <div className="car">
    <p>Car name: {props.name}</p>
    <p>Year: {props.year}</p>
    {props.children}
  </div>
)