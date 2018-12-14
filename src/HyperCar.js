import React from 'react';
import { Link } from 'react-router-dom';

const HyperCar= (props) =>{
    const hyperCarListItems = props.hyperCarList.map(hyperCar =>{
        return(
            <li>
                <Link to={`/hypercar/${hyperCar.name}`}>{hyperCar.name}</Link>
            </li>
        )
    });
    return (
        <div>
            <h1>Hyper Cars</h1>
            <ul>
                {hyperCarListItems}
            </ul>
        </div>
    )
}
export default HyperCar;