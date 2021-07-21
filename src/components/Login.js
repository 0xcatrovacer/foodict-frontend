import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleSignin = (e) => {
        e.preventDefault();
        const user = { username, password };

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/user/login`,
            headers: {
                "Content-Type": "application/json",
            },
            data: user,
        })
            .then((res) => {
                const token = res.data.token;
                localStorage.setItem("token", token);
                history.push("/home");
                window.location.reload();
            })
            .catch((e) => {
                alert("Authentication Failed");
                setUsername("");
                setPassword("");
            });
    };

    return (
        <div className="Login">
            <div className="login__imagecontainer">
                <img
                    className="login__image"
                    src="https://foodict.s3.ap-south-1.amazonaws.com/General/background.jpg"
                    alt=""
                ></img>
            </div>
            <div className="login__auth">
                <div>
                    <img
                        className="login__logo"
                        src="https://foodict.s3.ap-south-1.amazonaws.com/General/foodictLogo.png"
                        alt=""
                    ></img>
                </div>
                <div className="login__nonimage">
                    <form className="login__form" onSubmit={handleSignin}>
                        <div className="login__forminputs">
                            <input
                                type="text"
                                placeholder="Username"
                                className="login__form__inputfield"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            ></input>
                        </div>
                        <div className="login__forminputs">
                            <input
                                type="password"
                                placeholder="Password"
                                className="login__form__inputfield"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            ></input>
                        </div>
                        <button
                            className="login__form__button"
                            onClick={handleSignin}
                        >
                            Sign In
                        </button>
                    </form>
                    <p className="register__text">
                        Don't Have an account with us?{" "}
                        <a className="register__link" href="/register">
                            Register
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
