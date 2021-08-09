import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import { addToCart } from "../redux";

function CuratedListContainer({ item }) {
    const [open, setOpen] = useState(false);
    const [itemName, setItemName] = useState("");
    const [addedCart, setAddedCart] = useState(false);

    const items = useSelector((state) => state.items);

    useEffect(() => {
        items.map((cartItem) => {
            if (cartItem._id === item._id) {
                setAddedCart(true);
            }
        });
    }, [items]);

    const handleClick = (name) => {
        setOpen(true);
        setItemName(name);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const dispatch = useDispatch();

    return (
        <div>
            <div className="individual__item">
                <div className="image__container">
                    <img
                        src={item.item_imageurl}
                        alt="food img"
                        className="item__image"
                    ></img>
                </div>
                <div className="item__description">
                    <div className="item__name">{item.item_name}</div>
                    <div className="item__res_dist">
                        <span className="item__restaurant">
                            {item.res_name}
                        </span>
                        <span className="item__distance">5 Km</span>
                        <span className="item__price">₹ {item.price}</span>
                    </div>
                </div>
                <button
                    className="addcart__button"
                    onClick={() => {
                        dispatch(addToCart(item));
                        handleClick(item.item_name);
                    }}
                    disabled={addedCart}
                >
                    Add to Cart
                </button>
                <Snackbar
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                    open={open}
                    autoHideDuration={1500}
                    onClose={handleClose}
                    message={`${itemName} was added to Cart`}
                    action={
                        <React.Fragment>
                            <IconButton
                                size="small"
                                aria-label="close"
                                color="inherit"
                                onClick={handleClose}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                    }
                />
            </div>
        </div>
    );
}

export default CuratedListContainer;
