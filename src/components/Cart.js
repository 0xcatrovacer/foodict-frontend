import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFromCart, emptyCart } from "../redux";

import "./Cart.css";
import axios from "axios";

function Cart() {
    const [dataId, setDataId] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");

        axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/user/details`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                setName(res.data.name);
            })
            .catch((e) => {
                alert(e);
            });
    }, []);

    const items = useSelector((state) => state.items);
    const totalPrice = useSelector((state) => state.totalPrice);

    const dispatch = useDispatch();

    const history = useHistory();

    const loadCheckout = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const handleCheckout = async () => {
        const res = await loadCheckout(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay failed to connect");
            return;
        }

        const token = localStorage.getItem("token");

        await axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/payments/order`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then(async (res) => {
                await setDataId(res.data.id);
            })
            .catch((e) => {
                console.log(e);
            });

        const rzPayOptions = {
            key: process.env.REACT_APP_RZPAY_KEYID,
            amount: totalPrice * 100,
            currency: "INR",
            order_id: dataId,
            name: "Foodict Corporation",
            image: "https://foodict.s3.ap-south-1.amazonaws.com/General/foodictLogo.png",
            handler: (res) => {
                handlePaymentSuccess(res);
            },
            prefill: {
                name: name,
                email: "youremail@mail.com",
                contact: "9999999999",
            },
        };

        const rzPay = new window.Razorpay(rzPayOptions);

        rzPay.on("payment.failed", (res) => {
            history.push("/home");
        });

        rzPay.open();
    };

    const handlePaymentSuccess = async (response) => {
        const token = localStorage.getItem("token");

        await axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/order/neworder`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: {
                order: items,
                orderPrice: totalPrice,
            },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        console.log(response);
        dispatch(emptyCart());
        history.push("/pastorders");
    };

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
                        <button
                            className="cart__proceed__button"
                            disabled={totalPrice === 0}
                            onClick={handleCheckout}
                        >
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
