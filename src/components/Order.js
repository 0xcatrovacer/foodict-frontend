import React from "react";

import { format } from "date-fns";

const Order = ({ order }) => {
    return (
        <div className="Order">
            <h2>{order.orderPrice}</h2>
            <h3>{format(new Date(order.createdAt), "do MMM Y | HH:mm")}</h3>
        </div>
    );
};

export default Order;
