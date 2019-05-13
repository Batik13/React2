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
    pageTitle: 'App components',
    showCar: false
  } 

  toggleHandler = () => {
    this.setState({
      showCar: !this.state.showCar
    })
  }

  changeNameHandler = (value, index) => {
    const cars = [...this.state.cars]
    cars[index].name = value
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars})
  }

  componentDidMount() {
    console.log("App componentDidMount")
  }

  render() {

    console.log("App render")

    let cars = null
    if (this.state.showCar) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.changeNameHandler(event.target.value, index)}
          />
        )
      })
    }

    return (
      <div className="App" style={{textAlign: 'center'}}>
        <h1>{ this.state.pageTitle }</h1>
        <button 
          onClick={() => this.toggleHandler()}
        >Toggle cars</button>

        { cars }

      </div>
    )
  }

  componentWillMount() {
    console.log("App componentWillMount")
  }

}

export default App;
