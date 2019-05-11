import React, {Component} from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {

  state = {
    cars: [
      { name: 'Jaguar', year: 2018 },
      { name: 'Mazda', year: 2019 },
      { name: 'Ford', year: 2020 },
    ],
    pageTitle: 'App components'
  }

  changeTitleHandler = value => {
    this.setState({ pageTitle: value })
  }

  handleInput = event => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    return (
      <div className="App" style={{textAlign: 'center'}}>
        <h1>{ this.state.pageTitle }</h1>
        <input type="text" onChange={this.handleInput} />
        <button 
          onClick={this.changeTitleHandler.bind(this, 'Changed!')}
        >Change title</button>

        { this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />
          )
        })}

      </div>
    )
  }

}

export default App;
