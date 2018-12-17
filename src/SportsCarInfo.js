import React from 'react';

const SportsCarInfo = (props) =>{
    const allInfo = props.sportCarInfo;
    console.log(allInfo);
    const carName = props.match.params.sportsCarName
    const carDetail = allInfo.find( (car) =>{
        return car.name === carName
    })
    console.log(carName);
    console.log(carDetail);
    
    return(
        <div className="SingleCarPage">
        <ul>
        <h1>{carDetail.name}</h1>
        <img src={carDetail.img} alt={carDetail.name}></img>
        <h3>{carDetail.price}</h3>
        <h3>{carDetail.Torque}</h3>
        <h3>{carDetail.HorsePower}</h3>
        </ul>
        </div>
    )
}
export default SportsCarInfo; 

