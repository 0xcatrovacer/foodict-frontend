import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux";

import "./Cart.css";

function Cart() {
    const items = useSelector((state) => state.items);
    const totalPrice = useSelector((state) => state.totalPrice);

    const dispatch = useDispatch();

    return (
        <div className="Cart">
            <h1 className="cart__heading">Your Cart</h1>
            <div className="cart__nonheading">
                <div className="cart__leftcontainer">
                    {items.map((item) => (
                        <div className="cart__item" key={item._id}>
                            <div className="cartitem__row">
                                <img
                                    src={item.item_imageurl}
                                    alt="food img"
                                    className="cart__item__image"
                                ></img>
                                <p className="cart__item__name">
                                    {item.item_name}
                                </p>
                            </div>
                            <div className="cartitem__row">
                                <p className="cart__item__res">
                                    {item.res_name}
                                </p>
                                <p className="cart__item__price">
                                    ₹ {item.price}
                                </p>
                            </div>
                            <div className="remove__button__container">
                                <button
                                    className="cart__remove__button"
                                    onClick={() => {
                                        dispatch(removeFromCart(item));
                                    }}
                                >
                                    Remove From Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart__rightcontainer">
                    <p className="cart__totalprice">
                        Cart Total:{" "}
                        <span className="cart__totalamount">
                            ₹ {totalPrice}
                        </span>
                    </p>
                    <div className="proceed__button__container">
                        <button className="cart__proceed__button">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
