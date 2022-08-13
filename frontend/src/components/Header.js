import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="header">
            <img
                className="header__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
        </div>
    )
}

export default Header