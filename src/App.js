import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import SportsCar from './SportsCar';
import SuperCar from './SuperCar';
import HyperCar from './HyperCar';


import {
  BrowserRouter as Router, // Watches for changes to URL
  Route,                   // Renders components based on the specific URL
  //Link                     // Changes the URL so the Router sees it
} from 'react-router-dom';
import Home from './Home';
class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      sportsCar:[
        {
          "C63": {
            "price": "100,000",
            "HorsePower": "566 hp",
            "Torque": "495"
          }
        }
      ]

    }
  }
  
  
  
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        <Route path="/" exact component={Home}/>
        <Route path="/sportscar" render={(props) =>{
          return <SportsCar superCarList={Object.keys(this.state.sportsCar)} {...props}/>
        }}/>
        <Route path="/supercar" component={SuperCar}/>
        <Route path="/hypercar" component={HyperCar}/>
      </div>  
    </Router>
    );
  }
}

export default App;
