import React from "react";
import { useSelector } from "react-redux";

function Cart() {
    const items = useSelector((state) => state.items);

    return (
        <div>
            {items.map((item) => (
                <div>
                    <p>{item.item_name}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Cart;
