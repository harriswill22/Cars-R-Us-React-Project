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
                <div className="searchBox">
                <AutoComplete cars={this.state.carList}/>
                </div>
            </div> );
        }
    }
export default Home;