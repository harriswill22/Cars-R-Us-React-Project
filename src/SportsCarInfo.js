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
        <div>
        <ul>
        <h1>{carDetail.name}</h1>
        <img src={carDetail.img}></img>
        <h2>{carDetail.price}</h2>
        {carDetail.HorsePower}
        
        </ul>
        </div>
    )
}
export default SportsCarInfo; 

