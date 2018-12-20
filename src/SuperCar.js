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
            <div className="gif">
                <img src="https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/480x269/546b4a9620ca2_-_1-80940052-lg.gif?resize=768:*"/>
                </div>
            <ul>
                {superCarListItems}
            </ul>
        </div>
    )
}
export default SuperCar;