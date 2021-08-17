import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { emptyCart } from "../redux";
import { Input, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import "./Payment.css";

const Payment = () => {
    const [name, setName] = useState("");
    const [dataId, setDataId] = useState("");
    const [address, setAddress] = useState("");
    const [address_t, setAddress_t] = useState("");
    const [address_pin, setAddress_pin] = useState("");

    const [isNotSmallerScreen] = useMediaQuery("(min-width:1000px)");

    const history = useHistory();

    useEffect(() => {
        const foodict_token = localStorage.getItem("foodict_token");

        axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/user/details`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${foodict_token}`,
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

        const foodict_token = localStorage.getItem("foodict_token");

        await axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/payments/order`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${foodict_token}`,
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
        const foodict_token = localStorage.getItem("foodict_token");

        await axios({
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/order/neworder`,
            method: "POST",
            headers: {
                Authorization: `Bearer ${foodict_token}`,
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
        dispatch(emptyCart());
        history.push("/pastorders");
    };

    return (
        <ChakraProvider>
            <div className="payment__div">
                <div className="address__container">
                    <Text
                        marginTop="5vw"
                        marginLeft={isNotSmallerScreen && "5vw"}
                        fontSize={isNotSmallerScreen ? "1.7vw" : "20px"}
                    >
                        Enter your Address
                    </Text>
                    <Flex direction="column">
                        <Input
                            marginLeft={isNotSmallerScreen && "5vw"}
                            marginTop="3vw"
                            width={isNotSmallerScreen ? "30vw" : "90vw"}
                            borderColor="#ff914d"
                            borderWidth="2px"
                            maxLength={50}
                            placeholder="Address Line 1"
                            value={address}
                            onChange={(e) => {
                                setAddress(e.target.value);
                            }}
                        />
                        <Input
                            marginLeft={isNotSmallerScreen && "5vw"}
                            marginTop="1vw"
                            width={isNotSmallerScreen ? "30vw" : "90vw"}
                            borderColor="#ff914d"
                            borderWidth="2px"
                            maxLength={50}
                            placeholder="Address Line 2"
                            value={address_t}
                            onChange={(e) => {
                                setAddress_t(e.target.value);
                            }}
                        />
                        <Input
                            marginLeft={isNotSmallerScreen && "5vw"}
                            marginTop="1vw"
                            width={isNotSmallerScreen ? "30vw" : "90vw"}
                            borderColor="#ff914d"
                            borderWidth="2px"
                            maxLength={50}
                            placeholder="Pincode"
                            value={address_pin}
                            onChange={(e) => {
                                setAddress_pin(e.target.value);
                            }}
                        />
                    </Flex>
                </div>
                <div className="pay__rightcontainer">
                    <p className="cart__totalprice">
                        Cart Total:{" "}
                        <span className="cart__totalamount">
                            ₹ {totalPrice}
                        </span>
                    </p>
                    <div className="proceed__button__container">
                        <button
                            className="pay__button"
                            disabled={address === "" || address_pin === ""}
                            onClick={handleCheckout}
                        >
                            Pay ₹ {totalPrice}
                        </button>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    );
};

export default Payment;
