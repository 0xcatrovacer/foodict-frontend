import React from "react";
import "./Home.css";

// import SearchIcon from "@material-ui/icons/Search";
import CuratedList from "./CuratedList";

function Home() {
    return (
        <div className="Home">
            {/* <div className="search__container">
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
            </div> */}
            <div className="curated__container">
                <h2 className="curated__heading">Curated List Just for You</h2>
                <div className="curated__lists">
                    <CuratedList
                        pretext="Want something from"
                        keytext="Baskin Robbins"
                        posttext="?"
                        id="60f08bb177ca5d460c97097c"
                    />
                    <CuratedList
                        pretext="Or maybe from"
                        keytext="Starbucks"
                        posttext="?"
                        id="60f091217c62d921481f9456"
                    />
                    <CuratedList
                        pretext="Does"
                        keytext="Domino's Pizza"
                        posttext="tingle your tastebuds?"
                        id="60f092b67c62d921481f946e"
                    />
                    <CuratedList
                        pretext="Do you crave for"
                        keytext="KFC"
                        posttext="?"
                        id="60f120b170da1d5374e38bf0"
                    />
                    <CuratedList
                        pretext="Is"
                        keytext="Burger King"
                        posttext="kinda your thing?"
                        id="60f1226a70da1d5374e38c02"
                    />
                    <CuratedList
                        pretext="Let's drink at"
                        keytext="Keventers"
                        posttext="then"
                        id="60f1241f70da1d5374e38c14"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
