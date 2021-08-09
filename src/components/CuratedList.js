import axios from "axios";
import React, { useEffect, useState } from "react";

import "./CuratedList.css";
import CuratedListItems from "./CuratedListItems";

function CuratedList({ pretext, keytext, posttext, id }) {
    const [curatedList, setCuratedList] = useState([]);

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
                        <CuratedListItems item={item} />
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
