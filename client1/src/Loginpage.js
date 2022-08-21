import "./style.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";


/**useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);
 */

function Loginpage() {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [username, setUsername] = useState();
  const [passowrd, setPassword] = useState();
  const [userlogged, setUserlogged] = useState(false);

  function loginUser() {
    console.log("listOfUsers", listOfUsers)
    console.log("UserName", username)
    console.log("Password", passowrd)
    //alert("logged in")
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
      listOfUsers.forEach((user) => {
        if ((user.name === username) && (user.username === passowrd)) {
          setUserlogged(true)
          console.log("userlogged")
        }
      })

    });
  }
  return (
    <div>
      {!userlogged ?
        <div className="creatUser">
          <input type="text" placeholder="UserName..." onChange={(e) => { setUsername(e.target.value) }} />
          <input type="text" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
          <button onClick={loginUser}> log In </button>
        </div> :
        <div>
          user logged <br></br>
          Name: {username}
          <br></br>
          Password: {passowrd}
        </div>
      }
    </div>
  );
}

export default Loginpage;