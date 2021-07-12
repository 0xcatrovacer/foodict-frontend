import React from "react";
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
                </div>
            </div>
            <div className="navbar__right">
                <span className="navbar__name">Name</span>
                <span className="navbar__pastorders">Past Orders</span>
                <span className="navbar__cart">
                    <ShoppingCartRoundedIcon />
                </span>
            </div>
        </div>
    );
}

export default Navbar;
