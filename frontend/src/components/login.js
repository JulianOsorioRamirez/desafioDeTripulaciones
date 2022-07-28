import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Login(props){
 const[sendPhone, setDataToPhone] = useState("")
 const[sendPass, sendDataPass] = useState("")

 function sendLogin () {
 const requestOptions = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
   telf : sendPhone,
   pass: sendPass

  }),
};

fetch("login", requestOptions)
  .then((response) => response.json())

 }



    return(
<div>
<div className="phoneBox">
                  <p className="telText">Teléfono</p>
                  <input
                    className="telf"
                    id="telfLog"
                    type="text"
                    onChange={(e) => setDataToPhone(e.target.value)}
                    
                  />
                </div>
                <div className="passBox">
                  <p className="passText">Contraseña</p>
                  <input
                    className="contLog"
                    id="passLog"
                    type="password"
                    onChange={(e) => sendDataPass(e.target.value)}
                    
                  />
                   <input type="button" id="buttonLogin" value="Login" onClick={() => sendLogin()} />
                </div>
</div>
    )
}

export default Login;