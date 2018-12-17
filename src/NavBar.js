import React from 'react';
import { 
Link 
} from 'react-router-dom';

const NavBar = (props) =>{
    return (
        <ul className="Nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sportscar">Sports Car</Link></li>
            <li><Link to="/supercar">Super Car</Link></li>
            <li><Link to="/hypercar">Hyper Car</Link></li>
        </ul>
    );
};

export default NavBar; 