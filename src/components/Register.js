import React from "react";

import "./Register.css";

function Register() {
    return (
        <div className="Register">
            <div className="register__container">
                <img
                    src="https://foodict.s3.ap-south-1.amazonaws.com/General/foodictLogo.png"
                    alt="Logo"
                    className="register__image"
                ></img>

                <form className="register__form__container">
                    <div className="register__forminputs">
                        <input
                            type="text"
                            placeholder="Username"
                            className="reg__forminput"
                        ></input>
                        <input
                            type="text"
                            placeholder="Name"
                            className="reg__forminput"
                        ></input>
                        <input
                            type="password"
                            placeholder="Password"
                            className="reg__forminput"
                        ></input>
                    </div>
                    <button className="register__button"> Register </button>
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
