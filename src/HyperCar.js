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
            <div className="gif">
                <img src="https://media1.giphy.com/media/Ek2Bt0skLJN0Q/giphy.gif?cid=3640f6095c1ba8bb73687a5877f81d7e"/>
                </div>
            <ul>
                {hyperCarListItems}
            </ul>
        </div>
    )
}
export default HyperCar;