import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function ContRegis() {
  const [sendName, setDataToName] = useState("");
  const [sendUnName, setDataToUname] = useState("");
  const [sendDni, setDataToDni] = useState("");
  const [sendPass, setDataToPass] = useState("");
  const [sendPassConf, setDataToConPass] = useState("");
  const [sendNumber, setDataToNumber] = useState("");
  const [sendPostalCode, setDataToPostalCode] = useState("");

  const [state, setState] = useState("");

  const sendData = () => {
   
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: sendName,
        unName: sendUnName,
        dni: sendDni,
        pass: sendPass,
        passConf: sendPassConf,
        number: sendNumber,
        postalCode: sendPostalCode,
      }),
    };

    fetch("registro", requestOptions)
      .then((response) => response.json())
      .then((res) => console.log(setState(res)));
    if (state === true) {
     
      let test = document.getElementById("contenedorRegis");
      if (test.style.display == "block") {
        test.style.display = "none";
      } else {
        test.style.display = "block";
      }
    }
  };

  return (
    <div className="contenedorRegis" id="contenedorRegis">
      <div className="acountCreate">
        <div className="acountBox">
          <div className="acountContenedor">
            <div className="acountHead">
              <h1 className="acountTextHead">Crea una cuenta</h1>
            </div>
            <form className="acout" action="/registro" method="post">
              <div className="nameSurnameBox">
                <div className="nameBox">
                  <p></p>
                  <p className="nameText">Nombre</p>
                  <input
                    className="name"
                    id="name"
                    onChange={(e) => setDataToName(e.target.value)}
                    type="text"
                    name="name"
                    required=""
                  />
                </div>
                <div className="surnameBox">
                  <p className="surnameText">Apellidos</p>
                  <input
                    className="surname"
                    id="surname"
                    onChange={(e) => setDataToUname(e.target.value)}
                    type="text"
                    name="surname"
                    required=""
                  />
                </div>
              </div>
              <div className="dniPhoneBox">
                <div className="dniBox">
                  <p className="dniText">D.N.I</p>
                  <input
                    className="dni"
                    id="dni"
                    onChange={(e) => setDataToDni(e.target.value)}
                    type="text"
                    name="dni"
                    required=""
                  />
                </div>

                <div className="phoneBox">
                  <p className="phoneText">Teléfono</p>
                  <input
                    className="phone"
                    id="phone"
                    type="number"
                    onChange={(e) => setDataToNumber(e.target.value)}
                    
                  />
                </div>
              </div>
              <div className="passRepassBox">
              <div className="passBox">
                  <p className="passText">Contraseña</p>
                  <input
                    className="pass"
                    id="pass"
                    type="password"
                    onChange={(e) => setDataToPass(e.target.value)}
                    
                  />
                </div>
                <div className="passBox">
                  <p className="passText">Repita la contraseña</p>
                  <input
                    className="pass"
                    id="unpass"
                    type="password"
                    onChange={(e) => setDataToConPass(e.target.value)}
                    
                  />
                </div>
                <div className="postalCode">
                  <p className="cpText">Código postal</p>
                  <input
                    className="cp"
                    id="pCode"
                    type="text"
                    onChange={(e) => setDataToPostalCode(e.target.value)}
                    
                  />
                </div>
              </div>
              <input type="button" id="buttonReg" value="Registrarse" onClick={() => sendData()} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContRegis;
