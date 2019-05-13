import React from 'react'
import './Car.css'

class Car extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log('Car componentWillReceiveProps', nextProps)
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Car componentWillReceiveProps', nextProps, nextState)
    return true
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('Car componentWillReceiveProps', nextProps, nextState)
  }
  
  componentDidUpdate() {
    console.log('Car componentWillReceiveProps')
  }
  
  // static getDerivedStateFromProps(nextProps, prevSatte) {
  //   console.log('Car componentWillReceiveProps', nextProps, prevSatte)
  // }

  componentWillUnmount() {
    console.log('Car componentWillUnmount')
  }

  render() {
    console.log('Car render')

    // if(Math.random() > 0.7) {
    //   throw new Error("some error")
    // }
    
    const classes = ['input']

    if (this.props.name !== '') {
      classes.push('green')
    } else {
      classes.push('red')    
    }
    
    return (
      <div className="car">
        <p>Car name: {this.props.name}</p>
        <p>Year: {this.props.year}</p>
        <input 
          type="text" 
          onChange={this.props.onChangeName} 
          value={this.props.name} 
          className={classes.join(' ')}
        />
        <button onClick={this.props.onDelete}>Deleted</button>
      </div>
    )
    
  }
  
}

export default Car