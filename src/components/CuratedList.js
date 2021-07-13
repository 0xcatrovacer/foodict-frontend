import React from "react";

const curatedList = [
    {
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
        name: "Chicken Whopper Burger",
        restaurant: "Burger King",
        distance: 5,
        pic: "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/9/10/original/Chicken_Whopper.png",
    },
    {
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
                    <div className="individual__item">
                        <img src={item.pic} alt="food img"></img>
                        <div className="item__description">
                            <div className="item__name">{item.name}</div>
                            <div className="item__restaurant">
                                {item.restaurant} | {item.distance}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CuratedList;
