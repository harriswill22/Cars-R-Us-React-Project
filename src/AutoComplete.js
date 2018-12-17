import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class AutoComplete extends Component {
    constructor(props) {
        super(props);
        console.log(props.cars.length);
        
        this.state = {
            term: '',
            allResults: props.cars
        }
    }

componentWillReceiveProps(props){
    this.setState({
        allResults: props.cars
    })
}
    render() {
        return (
            <div>
                <SearchBar 
                    term={this.state.term}
                    handleInput={this._setTerm}
                />
                <SearchResults 
                    results={this._getFilteredResults()}
                />
                
            </div>
        );
    }

    _setTerm = (term) => {
        this.setState({
            term
        });
    }

    _getFilteredResults = () => {
        if (this.state.term.length === 0) {
            return [];
        } else {
            return this.state.allResults.filter(car => {
                return car.Make_Name.startsWith(this.state.term);
            });
        }
    }
}

export default AutoComplete;