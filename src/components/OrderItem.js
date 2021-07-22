import React from "react";

const OrderItem = ({ orderItem }) => {
    return (
        <div className="OrderItem">
            <img src={orderItem.item_imageurl}></img>
            <p>{orderItem.item_name}</p>
            <p>₹ {orderItem.price}</p>
            <p>{orderItem.res_name}</p>
        </div>
    );
};

export default OrderItem;
