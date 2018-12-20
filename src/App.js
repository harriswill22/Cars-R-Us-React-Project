import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import SportsCar from './SportsCar';
import SuperCar from './SuperCar';
import HyperCar from './HyperCar';
import SportsCarInfo from './SportsCarInfo';
import Home from './Home';
import SuperCarInfo from './SuperCarInfo';
import HyperCarInfo from './HyperCarInfo';

import {
  BrowserRouter as Router, // Watches for changes to URL
  Route,                   // Renders components based on the specific URL
  //Link                     // Changes the URL so the Router sees it
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      carList:[],
      sportsCar:[
        {
          "name":"Mercedes C63 AMG", 
            "price": "$80,000$",
            "HorsePower": "503-Hp",
            "Torque": "516-lb",
            "ZeroTo60": "3.8",
            "img": "http://autonationdrive.com/wp-content/uploads/2018/02/2018-Mercedes-AMG-C63-S-Coupe-review-photos-AutoNation-026-e1519065873901.jpg"
          
        },
        {
          "name":"Audi RS5", 
          "price": "$90,000",
          "HorsePower": "566-hp",
          "Torque": "495-lb",
          "ZeroTo60": "3.7",
          "img": "https://cdn.motor1.com/images/mgl/Nw34l/s4/2018-audi-rs5-coupe-first-drive.jpg"
        
      },
      {
        "name":"BMW M4", 
        "price": "$75,000",
        "HorsePower": "454-hp",
        "Torque": "406-lb",
        "ZeroTo60": "3.9",
        "img": "https://media.ed.edmunds-media.com/bmw/m4/2018/ot/2018_bmw_m4_LIFE1_ot_425171_717.jpg"
      
    },

    {
      "name":"Acura NSX", 
      "price": "$156,000",
      "HorsePower": "573 hp",
      "Torque": "476-lb",
      "ZeroTo60": "3.0",
      "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/15q4/662479/2017-acura-nsx-first-drive-review-car-and-driver-photo-662653-s-original.jpg"
    
  },
  {
    "name":"Chevrolet Corvette Z06", 
    "price": "$79,495",
    "HorsePower": "650-hp",
    "Torque": "650-lb",
    "ZeroTo60": "2.95",
    "img": "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2018/performance/corvette-z06/mov/01-images/2018-corvette-z06-masthead.jpg?imwidth=1200"
  
},
{
  "name":"Ford Mustang GT350 ", 
  "price": "$65,000",
  "HorsePower": "526-hp",
  "Torque": "429-lb",
  "ZeroTo60": "3.9",
  "img": "https://autoweek.com/sites/default/files/styles/gen-1200-675/public/shelbygt350_02_hr.jpg"

},
{
  "name":"Nissan GTR", 
  "price": "$99,990",
  "HorsePower": "600-hp",
  "Torque": "495-lb",
  "ZeroTo60": "2.9",
  "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q2/667349/2017-nissan-gt-r-first-drive-review-car-and-driver-photo-668748-s-original.jpg"

},

],
superCar:[ {
  
  "name":"Mclaren 720s", 
  "price": "$400,000",
  "HorsePower": "710-hp",
  "Torque": "568-lb",
  "ZeroTo60": " 2.39",
  "img": "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/mclaren-720s-1.jpg?itok=TO9P-V_n"

},
{
  
  "name":"Lamborghini Aventador SVJ ", 
  "price": "$517,770",
  "HorsePower": "759-hp",
  "Torque": "531-lb",
  "ZeroTo60": "2.4",
  "img": "https://hips.hearstapps.com/hmg-prod/images/lamborghini-aventador-svj-placement-1535077707.jpg"

},
{
  
  "name":"Ferrari 488 Pista ", 
  "price": "$450,050",
  "HorsePower": "660-hp",
  "Torque": "568-lb",
  "ZeroTo60": " 2.5",
  "img": "https://www.carmagazine.co.uk/Images/PageFiles/81811/Ferrari_488_Pista_23.jpg"

},

{
  
  "name":"Porsche 911 Turbo S ", 
  "price": "$250,050",
  "HorsePower": "607-hp",
  "Torque": "553-lb",
  "ZeroTo60": "2.6",
  "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q4/692997/2018-porsche-911-turbo-s-exclusive-first-drive-review-car-and-driver-photo-695623-s-original.jpg"

},

{
  
  "name":"Aston Martin db11 ", 
  "price": "$450,050",
  "HorsePower": "630-hp",
  "Torque": "516-lb",
  "ZeroTo60": "3.6",
  "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q3/685270/2018-aston-martin-db11-v-8-first-drive-review-car-and-driver-photo-691829-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*"

},
],

hyperCar:[ {
  "name":"Bugatti Chiron", 
  "price": "$3,000,000 ",
  "HorsePower": "1,479-hp",
  "Torque": "1,180-lb.",
  "ZeroTo60": " 2.4",
  "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-108.jpg"

},

{
  "name":"Ferrari LaFerrari", 
  "price": "$1,400,000 ",
  "HorsePower": "949-hp",
  "Torque": "664-lb.",
  "ZeroTo60": "2.4",
  "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/14q2/584476/2014-ferrari-laferrari-first-drive-review-car-and-driver-photo-584762-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*"

},

{
  "name":"McLaren P1", 
  "price": "$1,350,000 ",
  "HorsePower": "1,479-hp",
  "Torque": "664-lb.",
  "ZeroTo60": "2.6",
  "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/14q1/562747/2014-mclaren-p1-test-review-car-and-driver-photo-580034-s-original.jpg"

},

{
  "name":"Porsche 918 Spyder", 
  "price": "$845,000",
  "HorsePower": "887-hp",
  "Torque": "944-lb.",
  "ZeroTo60": "2.2 sec",
  "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/13q4/543504/2015-porsche-918-spyder-first-drive-review-car-and-driver-photo-557340-s-original.jpg"

},


{
  "name":"Koenigsegg One:1", 
  "price": "$1,800,000",
  "HorsePower": "1341-hp",
  "Torque": "1011-lb.",
  "ZeroTo60": "2.1",
  "img": "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/14q4/638369/2015-koenigsegg-one1-first-drive-review-car-and-driver-photo-654233-s-original.jpg"

},

]
  

    }
  }
  
  componentDidMount(){
    fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
    .then(r => r.json())
    .then(CarMakes =>{
        this.setState({
            carList: CarMakes.Results, 
        });
    })
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
        <Route path ="/hypercar/:hyperCarName" render={(props) =>{
          return <HyperCarInfo hyperCarInfo={this.state.hyperCar}{...props}/>
        }}/>
      </div>  
    </Router>
    );
  }
}

export default App;
