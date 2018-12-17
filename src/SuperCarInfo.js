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
        <h3>{carDetail.price}</h3>
        <h3>{carDetail.Torque}</h3>
        <h3>{carDetail.HorsePower}</h3>
        </ul>
        </div>
    )

}
export default SuperCarInfo;