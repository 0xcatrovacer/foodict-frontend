import React from "react";

const OrderItem = ({ orderItem }) => {
    return (
        <div className="OrderItem">
            <img
                src={orderItem.item_imageurl}
                className="order__item__img"
            ></img>
            <div className="order__column">
                <p className="order__item__name">{orderItem.item_name}</p>
                <p className="order__item__price">₹ {orderItem.price}</p>
                <p className="order__item__resname">{orderItem.res_name}</p>
            </div>
        </div>
    );
};

export default OrderItem;
