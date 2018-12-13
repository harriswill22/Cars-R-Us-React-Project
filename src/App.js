import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import SportsCar from './SportsCar';
import SuperCar from './SuperCar';
import HyperCar from './HyperCar';
import SportsCarInfo from './SportsCarInfo';

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
          "name":"C63", 
          
            "price": "100,000$",
            "HorsePower": "566 Hp",
            "Torque": "495 TQ",
          
            "img": "http://autonationdrive.com/wp-content/uploads/2018/02/2018-Mercedes-AMG-C63-S-Coupe-review-photos-AutoNation-026-e1519065873901.jpg"
          
        },
        {
          "name":"RS5", 
          "price": "120,000",
          "HorsePower": "566 hp",
          "Torque": "495",
          "img": "https://cdn.motor1.com/images/mgl/Nw34l/s4/2018-audi-rs5-coupe-first-drive.jpg"
        
      },
      {
        "name":"M4", 
        "price": "100,000",
        "HorsePower": "566 hp",
        "Torque": "495",
        "img": "https://media.ed.edmunds-media.com/bmw/m4/2018/ot/2018_bmw_m4_LIFE1_ot_425171_717.jpg"
      
    },

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
          return <SportsCar sportsCarList={this.state.sportsCar} {...props}/>
        }}/>
        <Route path="/sportscar/:sportsCarName" render={(props) =>{
          return <SportsCarInfo sportCarInfo={this.state.sportsCar}{...props}/>
        }}/>


        <Route path="/supercar" component={SuperCar}/>
        <Route path="/hypercar" component={HyperCar}/>
      </div>  
    </Router>
    );
  }
}

export default App;
