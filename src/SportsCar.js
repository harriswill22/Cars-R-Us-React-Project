import React from 'react';
import { Link } from 'react-router-dom';

const SportsCar= (props) =>{

    const sportsCarListItems = props.sportsCarList.map(sportsCar =>{
        return (
            <li className="CarPage">
            <Link to={`/sportscar/${sportsCar.name}`}>{sportsCar.name}</Link>
            </li>
        )
        
    });
    return(
        <div className="CarTitle">
            <h1>Sports Cars</h1>
            <div className="gif">
                <img src="https://hips.hearstapps.com/roa.h-cdn.co/assets/cm/14/47/546b4acf993d9_-_zzzzz-lg.gif?fill=160:89&resize=768:*"/>
                </div>
            <ul>
                {sportsCarListItems}
            </ul>
        </div>
    )

}
export default SportsCar;