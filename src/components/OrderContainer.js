import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Order from "./Order";

const OrderContainer = () => {
    const [pastorders, setPastOrders] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/order/pastorders`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                console.log(res.data);
                setPastOrders(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="OrderContainer">
            <Navbar backToHome />
            {pastorders.map((order) => (
                <div key={order._id}>
                    <Order order={order} />
                </div>
            ))}
        </div>
    );
};

export default OrderContainer;
