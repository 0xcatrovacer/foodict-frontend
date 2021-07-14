import React from "react";

import "./CuratedList.css";

const curatedList = [
    {
        id: 1,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/bengali1.jpg",
        price: 300,
    },
    {
        id: 2,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/english1.jpg",
        price: 300,
    },
    {
        id: 3,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/english2.jpg",
        price: 300,
    },
    {
        id: 4,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/french.png",
        price: 300,
    },
    {
        id: 5,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/gujarati1.jpg",
        price: 300,
    },
    {
        id: 6,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/northindian1.jpg",
        price: 300,
    },
    {
        id: 7,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/southindian2.jpg",
        price: 300,
    },
    {
        id: 8,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/southindian3.jpg",
        price: 300,
    },
    {
        id: 9,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/southindianthali.jpg",
        price: 300,
    },
    {
        id: 10,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://foodict.s3.ap-south-1.amazonaws.com/breakfast/starbucks.jpg",
        price: 300,
    },
];

function CuratedList({ cuisine }) {
    const ref = React.createRef();

    const handleScroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div className="CuratedList">
            <h3 className="cuisine__heading">{cuisine}</h3>
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
