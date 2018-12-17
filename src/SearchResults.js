import React from 'react';

const Result = (car) => {
    return (
        <li>{car.Make_Name}</li>
    );
};

const SearchResults = (props) => {
    return (
        <ul>
            {props.results.map(Result)}
        </ul>
    );
};

export default SearchResults;