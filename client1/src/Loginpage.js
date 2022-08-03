import "./style.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

function Loginpage() {
  function loginUser(){
    alert("logged in")
  }
  return (
    <div>
      <div className="creatUser">
        <input type="text" placeholder="UserName..." />
        <input type="text" placeholder="Password..." />
        <button onClick={loginUser}> log In </button>
      </div>
    </div>
  );
}

export default Loginpage;