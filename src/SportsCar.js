import React from 'react';
import { Link } from 'react-router-dom';

const SportsCar= (props) =>{
    const superCarListItems = props.superCarList.map(superCarName =>{
        return (
            <Link to={`/supercar/$`}></Link>
        )
    });
    return(
        
    )

}
export default SportsCar;