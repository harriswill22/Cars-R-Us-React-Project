import React from 'react';
import { Link } from 'react-router-dom';

const SportsCar= (props) =>{

    const sportsCarListItems = props.sportsCarList.map(sportsCar =>{
        return (
            <li>
            <Link to={`/sportscar/${sportsCar.name}`}>{sportsCar.name}</Link>
            </li>
        )
        
    });
    return(
        <div>
            <h1>Sports Cars</h1>
            <ul>
                {sportsCarListItems}
            </ul>
        </div>
    )

}
export default SportsCar;