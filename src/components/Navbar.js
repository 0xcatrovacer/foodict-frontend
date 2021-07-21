import React, { useEffect, useState } from "react";
import "./Navbar.css";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const numOfItems = useSelector((state) => state.numOfItems);

    const [name, setName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/user/details`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
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
        const token = localStorage.getItem("token");

        axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/user/logout`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then(() => {
            localStorage.removeItem("token");
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
                    <span className="nav__restaurants">
                        Restaurants <span className="near__you">Near You</span>
                    </span>
                </div>
            </div>
            <div className="navbar__right">
                <span className="navbar__name" onClick={handleLogout}>
                    Hello, <span className="after__hello">{name}</span>
                </span>
                <span className="navbar__pastorders">
                    Past <span className="orders__after">Orders</span>
                </span>
                <ShoppingCartRoundedIcon className="navbar__cart" />
                <span className="cartitems__total">{numOfItems}</span>
            </div>
        </div>
    );
}

export default Navbar;
