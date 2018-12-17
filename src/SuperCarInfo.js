import React from 'react';

const SuperCarInfo = (props) =>{
    const allInfo = props.superCarInfo;
    console.log(allInfo);
    const carName = props.match.params.superCarName
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
        <h3>Horsepower:{carDetail.HorsePower}</h3>
        </ul>
        </div>
    )

}
export default SuperCarInfo;