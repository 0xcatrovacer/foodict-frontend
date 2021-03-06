import React, { useEffect, useState } from "react";
import "./Navbar.css";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Navbar({ backToHome }) {
    const numOfItems = useSelector((state) => state.numOfItems);

    const [name, setName] = useState("");

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        const foodict_token = localStorage.getItem("foodict_token");

        axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/user/details`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${foodict_token}`,
            },
        })
            .then((res) => {
                const Name = res.data.name.split(" ")[0];
                setName(Name);
            })
            .catch((e) => {
                alert(e);
            });
    }, []);

    const history = useHistory();

    const handleLogout = () => {
        const foodict_token = localStorage.getItem("foodict_token");

        axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/user/logout`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${foodict_token}`,
            },
        }).then(() => {
            localStorage.removeItem("foodict_token");
            window.location.reload();
        });
    };

    return (
        <div className="Navbar">
            <div className="navbar__left">
                <div className="logo__container">
                    <img
                        className="nav__logo"
                        src="https://foodict.s3.ap-south-1.amazonaws.com/General/foodictLogo.png"
                        alt=""
                    ></img>
                    <span className="nav__foodict">Foodict</span>
                    {backToHome ? (
                        <span
                            className="nav__restaurants"
                            onClick={() => {
                                history.push("/home");
                            }}
                        >
                            Back <span className="near__you">To Home</span>
                        </span>
                    ) : (
                        <span
                            className="nav__restaurants"
                            onClick={() => {
                                history.push("/res-near-you");
                            }}
                        >
                            Restaurants{" "}
                            <span className="near__you">Near You</span>
                        </span>
                    )}
                </div>
            </div>
            <div className="navbar__right">
                <span
                    className="navbar__name"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    Hello, <span className="after__hello">{name}</span>
                </span>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem
                        onClick={() => {
                            handleClose();
                            handleLogout();
                        }}
                    >
                        Logout
                    </MenuItem>
                </Menu>
                <span
                    className="navbar__pastorders"
                    onClick={() => {
                        history.push("/pastorders");
                    }}
                >
                    Past <span className="orders__after">Orders</span>
                </span>
                <div
                    className="cart__container"
                    onClick={() => {
                        history.push("/cart");
                    }}
                >
                    <ShoppingCartRoundedIcon className="navbar__cart" />
                    <span className="cartitems__total">{numOfItems}</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
