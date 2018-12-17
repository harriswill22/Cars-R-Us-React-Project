import React from 'react';
import { Link } from 'react-router-dom';

const HyperCar= (props) =>{
    const hyperCarListItems = props.hyperCarList.map(hyperCar =>{
        return(
            <li className="CarPage">
                <Link to={`/hypercar/${hyperCar.name}`}>{hyperCar.name}</Link>
            </li>
        )
    });
    return (
        <div className="CarTitle">
            <h1>Hyper Cars</h1>
            <ul>
                {hyperCarListItems}
            </ul>
        </div>
    )
}
export default HyperCar;