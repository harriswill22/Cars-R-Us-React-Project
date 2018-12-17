import React from 'react';
import { Link } from 'react-router-dom';


const SuperCar= (props) =>{

  const superCarListItems = props.superCarList.map(superCar =>{
        return (
            <li className="CarPage">
            <Link to={`/supercar/${superCar.name}`}>{superCar.name}</Link>
            </li>
        )
        
    });
    return(
        <div className="CarTitle">
            <h1>Super Cars</h1>
            <ul>
                {superCarListItems}
            </ul>
        </div>
    )
}
export default SuperCar;