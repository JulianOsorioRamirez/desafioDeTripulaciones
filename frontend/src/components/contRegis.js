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
  console.log(state)

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
    
    
  };

  return (
    <div className="BASE">
      {state === "" ? (
        <div>
          <div className="COMPLETE">
            <label>Nombre</label>
            <input
              className="Rectangle-1"
              id="telfLog"
              type="text"
              placeholder="Pon tu Nombre"
              onChange={(e) => setDataToName(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Apellidos</label>
            <input
              className="Rectangle-1"
              id="telfLog"
              type="text"
              placeholder="Pon tus Apellidos"
              onChange={(e) => setDataToUname(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Movil</label>
            <input
              className="Rectangle-1"
              id="telfLog"
              type="text"
              placeholder="Pon tu numero"
              onChange={(e) => setDataToNumber(e.target.value)}
            />
          </div>
          <span className="-de-2">1 de 2</span>
          <button onClick={() => setState("2")}>
            Siguiente{" "}
            <a
              className="arrow-right-circle-SOLID"
              href="img/arrow-right-circle-solid.png"
            >
              {" "}
            </a>
          </button>
        </div>
      ) : (
        <div>
          <div className="COMPLETE">
            <label>Codigo postal</label>
            <input
              className="Rectangle-1"
              id="telfLog"
              type="text"
              placeholder="Pon tu codigo postal"
              onChange={(e) => setDataToName(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Contraseña</label>
            <input
              className="Rectangle-1"
              id="telfLog"
              type="text"
              placeholder="Pon tu contraseña "
              onChange={(e) => setDataToUname(e.target.value)}
            />
          </div>
          <div className="COMPLETE">
            <label>Repite tu contraseña</label>
            <input
              className="Rectangle-1"
              id="telfLog"
              type="text"
              placeholder="Repite tu contraseña"
              onChange={(e) => setDataToNumber(e.target.value)}
            />
          </div>
          <button >Continuar </button>
        </div>
      )}
    </div>
  );
}

export default ContRegis;
