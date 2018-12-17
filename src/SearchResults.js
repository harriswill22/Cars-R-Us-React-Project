import React from 'react';

const Result = (car) => {
    return (
        <li>{car.Make_Name}</li>
    );
};

const SearchResults = (props) => {
    return (
        <ul className="results">
            {props.results.map(Result)}
        </ul>
    );
};

export default SearchResults;