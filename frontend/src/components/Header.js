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
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-OptionLineOne">
                        Hello Guest
                    </span>

                    <span className="header-OptionLineTwo">
                       Sign In
                    </span>
                </div>

                <div className="header-option">
                    <span className="header-OptionLineOne">
                        Returns
                    </span>
                    <span className="header-OptionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header-option">
                    <span className="header-OptionLineOne">
                        Your
                    </span>
                    <span className="header-OptionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header-optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header-OptionLineTwo header-basketCount">0</span>
                </div>

            </div>


        </div>


    )
}

export default Header