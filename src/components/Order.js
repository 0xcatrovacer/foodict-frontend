import React from "react";
import OrderItem from "./OrderItem";

import { format } from "date-fns";

const Order = ({ order }) => {
    return (
        <div className="Order">
            <div className="order__desc">
                <p className="order__time">
                    Ordered On:{" "}
                    {format(new Date(order.createdAt), "do MMM Y - hh:mm a")}
                </p>
                <p className="order__totalprice">
                    Order Total: ₹ {order.orderPrice}
                </p>
            </div>
            {order.order.map((orderItem) => (
                <div key={orderItem._id} className="order__item__key">
                    <OrderItem orderItem={orderItem} />
                </div>
            ))}
        </div>
    );
};

export default Order;
