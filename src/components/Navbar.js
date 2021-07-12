import React from "react";
import "./Navbar.css";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";

function Navbar() {
    return (
        <div className="Navbar">
            <div className="navbar__left">
                <div className="logo__container">
                    <img
                        className="nav__logo"
                        src="https://foodict.s3.ap-south-1.amazonaws.com/foodictLogo.png"
                        alt=""
                    ></img>
                    <span className="nav__foodict">Foodict</span>
                    <span className="nav__restaurants">
                        Restaurants <span className="near__you">Near You</span>
                    </span>
                </div>
            </div>
            <div className="navbar__right">
                <span className="navbar__name">
                    Hello, <span className="after__hello">Swarnab</span>
                </span>
                <span className="navbar__pastorders">
                    Past <span className="orders__after">Orders</span>
                </span>
                <ShoppingCartRoundedIcon className="navbar__cart" />
                <span className="cartitems__total">5</span>
            </div>
        </div>
    );
}

export default Navbar;
