import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./navigation.scss"

const Navigation = ({
    savedItemList=[]
}) => {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <div className='container-navigation'>
            <div className='container-title'>
                <h1>react shop</h1>
            </div>
            <ul className='navigation'>
                <li className={pathname === "/" ? "nav-active" : ""}><Link to="/">
                    Home
                </Link></li>
                <li className={pathname === "/products" ? "nav-active" : ""}><Link to="/product">
                    Product
                </Link></li>
                <li className={pathname === "/about" ? "nav-active" : ""}><Link to="/about">
                    About
                </Link></li>
                <li className={pathname === "/contact" ? "nav-active" : ""}><Link to="/contact">
                    Contact
                </Link></li>
            </ul>
            <div className='container-button'>
                <Link to="/saved">
                    <button className='btn'><i class="fas fa-heart"></i></button>
                </Link>
                <Link to="/Basket">
                    <button className='btn'><i class="fas fa-shopping-basket"></i></button>
                </Link>
            </div>
        </div>
    );
};

export default Navigation;