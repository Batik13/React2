import React from 'react';
import './App.css';
import Car from './Car/Car'

function App() {
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1>Hello world!</h1>
      <Car name={'Mazda'} year="2019" />
      <Car name={'BMW'} year="2018">
        <p style={{color: 'red'}}>COLOR</p>
      </Car>
    </div>
  );
}

export default App;
