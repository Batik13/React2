import React from 'react'

export default class ErrorBoundary extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <p>Error children component...</p>
      )
    }

    return this.props.children
  }  
}