import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import HomeAuth from "./components/Home-Auth";
import Navbar from "./components/Navbar";

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        {token ? (
                            <Redirect to="/home" />
                        ) : (
                            <Redirect to="/login" />
                        )}
                    </Route>
                    <Route exact path="/login">
                        {token ? <Redirect to="/home" /> : <Login />}
                    </Route>
                    <Route exact path="/home">
                        {token ? <HomeAuth /> : <Redirect to="/login" />}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
