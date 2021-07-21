import { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import HomeAuth from "./components/Home-Auth";
import Register from "./components/Register";
import { Provider } from "react-redux";

import store from "./redux/store";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

function App() {
    const [token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);

    return (
        <Provider store={store}>
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
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/cart">
                            <Navbar backToHome />
                            <Cart />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
