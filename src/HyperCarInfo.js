import React from 'react';
const HyperCarInfo =(props) =>{
    const allInfo = props.hyperCarInfo
    const carName = props.match.params.hyperCarName
    const carDetail = allInfo.find((car) =>{
        return car.name === carName
    })

    return(
        <div className="SingleCarPage">
        <ul>
        <h1>{carDetail.name}</h1>
        <img src={carDetail.img} alt={carDetail.name}></img>
        <h3>Price: {carDetail.price}</h3>
        <h3>Torque: {carDetail.Torque}</h3>
        <h3>Horsepower: {carDetail.HorsePower}</h3>
        <h3>0 to 60: {carDetail.ZeroTo60} Seconds</h3>
        </ul>
        </div>
    )
}
export default HyperCarInfo; 
