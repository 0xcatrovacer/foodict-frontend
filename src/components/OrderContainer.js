import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Order from "./Order";

import "./OrderContainer.css";

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
                const ordersList = res.data;
                const len = ordersList.length;
                const pastOrdersList = [
                    ordersList[len - 5],
                    ordersList[len - 4],
                    ordersList[len - 3],
                    ordersList[len - 2],
                    ordersList[len - 1],
                ];
                setPastOrders(pastOrdersList);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="OrderContainer">
            <Navbar backToHome />
            <div className="past__orders">
                {pastorders.map((order) => (
                    <div key={order._id} className="individual__order">
                        <Order order={order} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderContainer;
