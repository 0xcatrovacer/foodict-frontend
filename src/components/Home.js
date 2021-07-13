import React from "react";
import "./Home.css";

import SearchIcon from "@material-ui/icons/Search";
import CuratedList from "./CuratedList";

function Home() {
    return (
        <div className="Home">
            <div className="search__container">
                <h2 className="search__text">
                    What are you{" "}
                    <span className="craving__orange">craving </span>
                    today?
                </h2>
                <div className="search__input">
                    <input type="text" className="search__inputfield"></input>
                    <button className="search__button">
                        <SearchIcon
                            className="button_icon"
                            style={{ fontSize: 22 }}
                        />
                    </button>
                </div>
            </div>
            <div className="curated__container">
                <h2 className="curated__heading">Curated List Just for You</h2>
                <div className="curated__lists">
                    <CuratedList cuisine="Breakfast" />
                </div>
            </div>
        </div>
    );
}

export default Home;
