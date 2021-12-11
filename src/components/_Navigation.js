import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    console.log(location, pathname, splitLocation);

    return (
        <ul className='navigation'>
            <li className={pathname === "/" ? "nav-active" : ""}><Link to="/">
                Home
            </Link></li>
            <li className={pathname === "/product" ? "nav-active" : ""}><Link to="/product">
                Product
            </Link></li>
            <li className={pathname === "/about" ? "nav-active" : ""}><Link to="/about">
                About
            </Link></li>
            <li className={pathname === "/contact" ? "nav-active" : ""}><Link to="/contact">
                Contact
            </Link></li>
        </ul>
    );
};

export default Navigation;