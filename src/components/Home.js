import React from "react";

function Home() {
    return (
        <div className="Home">
            <div className="search__container">
                <div className="search__heading">
                    <h2 className="search__text">
                        What are you craving today?
                    </h2>
                </div>
                <div className="search__input">
                    <input type="text" className="search__inputfienld"></input>
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
