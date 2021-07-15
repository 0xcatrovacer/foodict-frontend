import axios from "axios";
import React, { useEffect, useState } from "react";

import "./CuratedList.css";

function CuratedList({ title, id }) {
    const [curatedList, setCuratedList] = useState([]);

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/menuitem/details`,
            headers: {
                "Content-Type": "application/json",
            },
            data: {
                restaurant: id,
            },
        })
            .then((res) => {
                console.log(res.data);
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
            <h3 className="cuisine__heading">{title}</h3>
            <div className="slider__container">
                <span
                    className="angleLeft sliderButton"
                    onClick={() => handleScroll(-800)}
                >
                    &#10094;
                </span>
                <div className="curated__listitems" ref={ref}>
                    {curatedList.map((item) => (
                        <div className="individual__item" key={item.id}>
                            <div className="image__container">
                                <img
                                    src={item.pic}
                                    alt="food img"
                                    className="item__image"
                                ></img>
                            </div>
                            <div className="item__description">
                                <div className="item__name">{item.name}</div>
                                <div className="item__res_dist">
                                    <span className="item__restaurant">
                                        {item.restaurant}
                                    </span>
                                    <span className="item__distance">
                                        {item.distance} Km
                                    </span>
                                    <span className="item__price">
                                        ₹ {item.price}
                                    </span>
                                </div>
                            </div>
                            <button className="addcart__button">
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
