import React, {Component} from 'react';
import AutoComplete from './AutoComplete';

    class Home extends Component {
        constructor(props){
            super(props);
            this.state = { 
                carList:[], 
            }  
        }

        
    componentDidMount(){
        fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
        .then(r => r.json())
        .then(CarMakes =>{
            this.setState({
                carList: CarMakes.Results
            });
        })
    }

        
        render() { 
            return ( 
            <div className="Home">
                <h1>Cars"R"Us</h1>
                <div className="gif">
                <img src="https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b4abb5104e_-_tumblr_ncbd0aqa4u1rpdptuo2_400-25259459-lg.gif?crop=1xw:0.995575221238938xh;center,top&resize=5040:*"/>
                </div>
                <div className="searchBox">
                <AutoComplete cars={this.state.carList}/>
                </div>


            </div> );
        }
    }
export default Home;