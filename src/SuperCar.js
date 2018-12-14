import React from 'react';
import { Link } from 'react-router-dom';


const SuperCar= (props) =>{

  const superCarListItems = props.superCarList.map(superCar =>{
        return (
            <li>
            <Link to={`/supercar/${superCar.name}`}>{superCar.name}</Link>
            </li>
        )
        
    });
    return(
        <div>
            <h1>Super Cars</h1>
            <ul>
                {superCarListItems}
            </ul>
        </div>
    )
}
export default SuperCar;