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

  changeTitleHandler = value => {
    this.setState({ pageTitle: value })
  }

  toggleHandler = () => {
    this.setState({
      showCar: !this.state.showCar
    })
  }

  render() {

    let cars = this.state.cars.map((car, index) => {
      return (
        <Car
          key={index}
          name={car.name}
          year={car.year}
          onChangeTitle={() => this.changeTitleHandler(car.name)}
        />
      )
    })
    
    if (!this.state.showCar) {
      cars = null
    }
    
    return (
      <div className="App" style={{textAlign: 'center'}}>
        <h1>{ this.state.pageTitle }</h1>        
        <button 
          onClick={() => this.toggleHandler()}
        >Toggle cars</button>

        {/* { cars } */}

        {
          this.state.showCar
            ?
              this.state.cars.map((car, index) => {
                return (
                  <Car
                    key={index}
                    name={car.name}
                    year={car.year}
                    onChangeTitle={() => this.changeTitleHandler(car.name)}
                  />
                )
              })
            :
              null
        }
      </div>
    )
  }

}

export default App;
