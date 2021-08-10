import axios from "axios";
import React, { useEffect, useState } from "react";

function ResNearYou() {
    const [eateries, setEateries] = useState([]);

    useEffect(async () => {
        await axios({
            method: "GET",
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/eatery/get`,
        })
            .then((res) => {
                setEateries(res.data);
            })
            .catch((e) => {
                alert(e);
            });
    }, []);

    return (
        <div>
            <h1 className="resny__heading">Restaurants Near You</h1>
            <div className="resny__eateries">
                {eateries &&
                    eateries.map((eatery) => (
                        <div className="resny__eatery">
                            <div className="resny__eatery__toprow">
                                <img src={eatery.eatery_imageurl}></img>
                                <p className="resny__eateryname">
                                    {eatery.eatery_name}
                                </p>
                            </div>
                            <p className="resny__eaterytype">
                                {eatery.eatery_type}
                            </p>
                            <p>{eatery.eatery_address}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default ResNearYou;
