import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import SportsCar from './SportsCar';
import SuperCar from './SuperCar';
import HyperCar from './HyperCar';
import SportsCarInfo from './SportsCarInfo';
import Home from './Home';
import SuperCarInfo from './SuperCarInfo';

import {
  BrowserRouter as Router, // Watches for changes to URL
  Route,                   // Renders components based on the specific URL
  //Link                     // Changes the URL so the Router sees it
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      sportsCar:[
        {
          "name":"Mercedes C63", 
          
            "price": "100,000$",
            "HorsePower": "566 Hp",
            "Torque": "495 TQ",
          
            "img": "http://autonationdrive.com/wp-content/uploads/2018/02/2018-Mercedes-AMG-C63-S-Coupe-review-photos-AutoNation-026-e1519065873901.jpg"
          
        },
        {
          "name":"Audi RS5", 
          "price": "120,000",
          "HorsePower": "566 hp",
          "Torque": "495",
          "img": "https://cdn.motor1.com/images/mgl/Nw34l/s4/2018-audi-rs5-coupe-first-drive.jpg"
        
      },
      {
        "name":"BMW M4", 
        "price": "100,000",
        "HorsePower": "566 hp",
        "Torque": "495",
        "img": "https://media.ed.edmunds-media.com/bmw/m4/2018/ot/2018_bmw_m4_LIFE1_ot_425171_717.jpg"
      
    },

    {
      "name":"Acura NSX", 
      "price": "100,000",
      "HorsePower": "566 hp",
      "Torque": "495",
      "img": "https://media.ed.edmunds-media.com/bmw/m4/2018/ot/2018_bmw_m4_LIFE1_ot_425171_717.jpg"
    
  },
  {
    "name":"Chevrolet Corvette ", 
    "price": "100,000",
    "HorsePower": "566 hp",
    "Torque": "495",
    "img": "https://media.ed.edmunds-media.com/bmw/m4/2018/ot/2018_bmw_m4_LIFE1_ot_425171_717.jpg"
  
},
{
  "name":"Ford Mustang ", 
  "price": "100,000",
  "HorsePower": "566 hp",
  "Torque": "495",
  "img": "https://media.ed.edmunds-media.com/bmw/m4/2018/ot/2018_bmw_m4_LIFE1_ot_425171_717.jpg"

},
{
  "name":"Nissan GTR", 
  "price": "100,000",
  "HorsePower": "566 hp",
  "Torque": "495",
  "img": "https://media.ed.edmunds-media.com/bmw/m4/2018/ot/2018_bmw_m4_LIFE1_ot_425171_717.jpg"

},

],
superCar:[ {
  
  "name":"Nissan GTR", 
  "price": "100,000",
  "HorsePower": "566 hp",
  "Torque": "495",
  "img": "https://media.ed.edmunds-media.com/bmw/m4/2018/ot/2018_bmw_m4_LIFE1_ot_425171_717.jpg"

},

],

hyperCar:[ {
  "name":"Bugottii", 
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


        <Route path="/supercar" render={(props) =>{
          return <SuperCar superCarList={this.state.superCar} {...props}/>
        }}/>
        <Route path="/supercar/:superCarName" render={(props) =>{
          return <SuperCarInfo superCarInfo={this.state.superCar}{...props}/>
        }}/>
          
        <Route path="/hypercar" render={(props) =>{
          return <HyperCar hyperCarList={this.state.hyperCar}{...props}/>
        }}/>
      </div>  
    </Router>
    );
  }
}

export default App;
