import React from "react";
import OrderItem from "./OrderItem";

import { format } from "date-fns";

const Order = ({ order }) => {
    return (
        <div className="Order">
            <div className="order__desc">
                <p className="order__time">
                    Ordered On:{" "}
                    <span className="order__time__resp">
                        {format(
                            new Date(order.createdAt),
                            "do MMM Y - hh:mm a"
                        )}
                    </span>
                </p>
                <p className="order__totalprice">
                    Order Total:{" "}
                    <span className="order__price__resp">
                        ₹ {order.orderPrice}
                    </span>
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
