import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Register.css";

function Register() {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    const handleRegister = (e) => {
        e.preventDefault();

        const user = { username, name, password };

        axios({
            method: "POST",
            url: `${process.env.REACT_APP_FOODICT_BACKEND}/user/createaccount`,
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
                alert(e.response.data.message);
                setUsername("");
                setPassword("");
            });
    };

    return (
        <div className="Register">
            <div className="register__container">
                <img
                    src="https://foodict.s3.ap-south-1.amazonaws.com/General/foodictLogo.png"
                    alt="Logo"
                    className="register__image"
                ></img>

                <form
                    className="register__form__container"
                    onSubmit={handleRegister}
                >
                    <div className="register__forminputs">
                        <input
                            type="text"
                            placeholder="Username"
                            className="reg__forminput"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        ></input>
                        <input
                            type="text"
                            placeholder="Name"
                            className="reg__forminput"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        ></input>
                        <input
                            type="password"
                            placeholder="Password"
                            className="reg__forminput"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        ></input>
                    </div>
                    <button
                        className="register__button"
                        onClick={handleRegister}
                    >
                        {" "}
                        Register{" "}
                    </button>
                </form>

                <p className="sign_in__text">
                    {" "}
                    Already have an account?{" "}
                    <a href="/login" className="sign_in__link">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Register;
