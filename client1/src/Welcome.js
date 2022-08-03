import "./style.css";
import React, { useState } from "react";
import Axios from "axios";
import App from "./App";
import Loginpage from "./Loginpage";


function Welcome() {
    const [register, setShow] = useState(false)
    const [loginUser, setLoginUser] = useState(false)
    function showRegister() {
        setShow(true)
    }
    function showLogin() {
        setLoginUser(true)
        setShow(false)
    }

    return (
        <div className="welcome">
            <h1>Welcome to login logout single App</h1>            
            <button onClick={showRegister}>Register</button>
            <button onClick={showLogin}>LogIn</button>
            {register?<App/>:loginUser?<Loginpage/>:null}            
        </div>
    );
}

export default Welcome;