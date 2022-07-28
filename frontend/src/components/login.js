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
      <div className="phoneBox">
        <p className="telText">Móvil</p>
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

        <div className="remember">
          <input type="checkbox" name="remember" id="rememberClick" />
          <label for="remember" id="rememberText">Recuerda mi contraseña</label>
       </div>
       <div className="passRemember">
       <label for="remember" id="rememberText">¿Has olvidado tu contraseña?</label>
       </div>
        <div className="button">
          <input type="button" id="buttonLogin" value="Entrar" onClick={() => sendLogin()} />
        </div>
      </div>
      <div className="registBox">
        <label id="newMemberTxt">¿Eres Nuevo?</label>
        <input type="button" id="buttonLogin" value="Crear Cuenta" />
      </div>
    </div>
  )
}

export default Login;