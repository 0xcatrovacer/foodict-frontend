import React from "react";
import OrderItem from "./OrderItem";

import { format } from "date-fns";

const Order = ({ order }) => {
    return (
        <div className="Order">
            <h2>Order Total: ₹ {order.orderPrice}</h2>
            <h3>
                Ordered On:{" "}
                {format(new Date(order.createdAt), "do MMM Y - hh:mm a")}
            </h3>
            {order.order.map((orderItem) => (
                <div key={orderItem._id}>
                    <OrderItem orderItem={orderItem} />
                </div>
            ))}
        </div>
    );
};

export default Order;
