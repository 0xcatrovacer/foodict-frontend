import React from "react";

import "./CuratedList.css";

const curatedList = [
    {
        id: 1,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        id: 2,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        id: 3,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        id: 4,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        id: 5,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        id: 6,
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
];

function CuratedList({ cuisine }) {
    return (
        <div className="CuratedList">
            <h3 className="cuisine__heading">{cuisine}</h3>
            <div className="curated__listitems">
                {curatedList.map((item) => (
                    <div className="individual__item" key={item.id}>
                        <img
                            src={item.pic}
                            alt="food img"
                            className="item__image"
                        ></img>
                        <div className="item__description">
                            <div className="item__name">{item.name}</div>
                            <div className="item__res_dist">
                                <span className="item__restaurant">
                                    {item.restaurant}
                                </span>
                                <span className="item__distance">
                                    {item.distance} Km
                                </span>
                            </div>
                        </div>
                        <button className="addcart__button">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CuratedList;
