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
                    <CuratedList
                        title="Baskin Robbins"
                        id="60f08bb177ca5d460c97097c"
                    />
                    <CuratedList
                        title="Starbucks"
                        id="60f091217c62d921481f9456"
                    />
                    <CuratedList
                        title="Domino's Pizza"
                        id="60f092b67c62d921481f946e"
                    />
                    <CuratedList
                        title="KFC"
                        id="60f120b170da1d5374e38bf0"
                    />
                    <CuratedList
                        title="Burger King"
                        id="60f1226a70da1d5374e38c02"
                    />
                    <CuratedList
                        title="Keventers"
                        id="60f1241f70da1d5374e38c14"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
