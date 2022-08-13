import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">

            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            <div className="headerSearch">
                <input className="searchInput" type="text" />
                <SearchIcon className="searchIcon" />
            </div>


        </div>


    )
}

export default Header