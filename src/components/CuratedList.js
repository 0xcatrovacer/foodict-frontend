import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux";

import "./CuratedList.css";

function CuratedList({ pretext, keytext, posttext, id }) {
    const [curatedList, setCuratedList] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        const eatery = { restaurant: id };

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/menuitem/details`,
            headers: {
                "Content-Type": "application/json",
            },
            data: eatery,
        })
            .then((res) => {
                setCuratedList(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, [id]);

    const ref = React.createRef();

    const handleScroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div className="CuratedList">
            <h3 className="cuisine__heading">
                {pretext} <span className="orange__keytext">{keytext}</span>{" "}
                {posttext}
            </h3>
            <div className="slider__container">
                <span
                    className="angleLeft sliderButton"
                    onClick={() => handleScroll(-800)}
                >
                    &#10094;
                </span>
                <div className="curated__listitems" ref={ref}>
                    {curatedList.map((item) => (
                        <div className="individual__item" key={item._id}>
                            <div className="image__container">
                                <img
                                    src={item.item_imageurl}
                                    alt="food img"
                                    className="item__image"
                                ></img>
                            </div>
                            <div className="item__description">
                                <div className="item__name">
                                    {item.item_name}
                                </div>
                                <div className="item__res_dist">
                                    <span className="item__restaurant">
                                        {item.res_name}
                                    </span>
                                    <span className="item__distance">5 Km</span>
                                    <span className="item__price">
                                        ₹ {item.price}
                                    </span>
                                </div>
                            </div>
                            <button
                                className="addcart__button"
                                onClick={() => dispatch(addToCart())}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                    <span
                        className="angleRight sliderButton"
                        onClick={() => handleScroll(800)}
                    >
                        &#10095;
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CuratedList;
