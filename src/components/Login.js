import React from "react";
import "./Login.css";

function Login() {
    return (
        <div className="Login">
            <div className="login__imagecontainer">
                <img
                    className="login__image"
                    src="https://foodict.s3.ap-south-1.amazonaws.com/background.jpg"
                    alt=""
                ></img>
            </div>
            <div className="login__auth">
                <div>
                    <img
                        className="login__logo"
                        src="https://foodict.s3.ap-south-1.amazonaws.com/foodictLogo.png"
                        alt=""
                    ></img>
                </div>
                <div className="login__nonimage">
                    <form className="login__form">
                        <div className="login__forminputs">
                            <input
                                type="text"
                                placeholder="Username"
                                className="login__form__inputfield"
                            ></input>
                        </div>
                        <div className="login__forminputs">
                            <input
                                type="password"
                                placeholder="Password"
                                className="login__form__inputfield"
                            ></input>
                        </div>
                        <button className="login__form__button">Sign In</button>
                    </form>
                    <p className="register__text">
                        Don't Have an account with us? <a href="#">Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
