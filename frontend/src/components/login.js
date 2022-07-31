import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Login(props) {
  const [sendPhone, setDataToPhone] = useState("")
  const [sendPass, sendDataPass] = useState("")

  function sendLogin() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        telf: sendPhone,
        pass: sendPass

      }),
    };

    fetch("login", requestOptions)
      .then((response) => response.json())

  }



  return (
    <div className="loginInputs">
      <div className="inputsLog">
      <div className="COMPLETE">
            <label>Movil</label>
            <input
              className="Rectangle-1"
              id="telfLog"
              type="text"
              placeholder="Introduce tu numero"
              onChange={(e) => setDataToPhone(e.target.value)}
            />
          </div>
      <div className="COMPLETE">
            <label>Contraseña</label>
            <input
              className="Rectangle-1"
              id="telfLog"
              type="text"
              placeholder="Pon tu contraseña"
              onChange={(e) => sendDataPass(e.target.value)}
            />
          </div>
      </div>
      

      <label className="labelCheckRemember">
        <input type="checkbox" className="check2" id="check1" />
        <span className="spanRemember">Recordar mi contraseña</span>
      </label>
      <div className="button">
      <button id = "buttonLogin" onClick={sendLogin}>Entrar</button>
          
        </div>
        <div className="passRemember">
       <label for="remember" id="rememberText">¿Has olvidado tu contraseña?</label>
       </div>
       <div class="Line-1"></div>
     
        <label id="newMemberTxt">¿Eres Nuevo?</label>
      <button id = "buttonLogin2" onClick={sendLogin}>Regístrate</button>
        
      
    </div>
  )
}

export default Login;