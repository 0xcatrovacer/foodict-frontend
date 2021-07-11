import React from "react";

function Login() {
    return (
        <div className="Login">
            <div className="login__image">
                <img src="https://foodict.s3.ap-south-1.amazonaws.com/background.jpg"></img>
            </div>
            <div className="login__auth">
                <div className="logo">
                    <img src="https://foodict.s3.ap-south-1.amazonaws.com/foodictLogo.png"></img>
                </div>
                <div className="login__form">
                    <form>
                        <label>Username</label>
                        <input type="text" placeholder="Username"></input>
                        <label>Password</label>
                        <input type="password" placeholder="Password"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
