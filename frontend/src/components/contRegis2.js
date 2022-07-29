import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function ContRegis2() {
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
    
     
     <div class="BASE">
     
    </div> 
    

    
    
  );
}

export default ContRegis2;
