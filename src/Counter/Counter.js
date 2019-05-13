import React from 'react'

class Counter extends React.Component {
  state = {
    counter: 0          
  }

  incHandler = () => {
    this.setState({counter: this.state.counter + 1})
  }
  
  decHandler = () => {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return (
      // <React.Fragment>
      <>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.decHandler}>-</button>
        <button onClick={this.incHandler}>+</button>
      </>
      // </React.Fragment>
    )    
  }
}

export default Counter