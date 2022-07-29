
import React, { useState, useEffect } from "react";
import Logo1 from "./logo1";

function TipoUsuario(props) {

    const [tipoUsuario, setTipoUsuario] = useState(0);
    const [message, setMessage] = useState(0);


    useEffect(() => {
       setMessage(1)
       console.log(tipoUsuario)
       console.log(message)
      }, [tipoUsuario]);

function continuar(){
     if(tipoUsuario !=0){
    //   const requestOptions = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ tipoUsuario,}),
    //   };
    //   fetch("tipousuario", requestOptions)
    //     .then((response) => response.json())
    //     .then((res) => {
         
    //     });
    }else{
        setMessage(0)
    }

    }


    return (

        <div className="tipousuario">
            <Logo1 />
            <div className="titulo">

                <h3> ¿Que papel quieres tener en la red?</h3>

            </div>
            <div className="contenedortipo">

                <div className="tipo"  onClick={() => setTipoUsuario(1)}>
                    <div className="imagen">

                    </div>
                    <div>
                        <h4>Voluntario</h4>
                        <p>
                            Nam ut justo placerat, eleifend sem at, finibus velit.
                        </p>
                    </div>
                </div>
                <div className="tipo" onClick={() => setTipoUsuario(2)}>
                    <div className="imagen">

                    </div>
                    <div>
                        <h4>Miembro</h4>
                        <p>
                            Nam ut justo placerat, eleifend sem at, finibus velit.
                        </p>
                    </div>


                </div>
                <div className="tipo" onClick={() => setTipoUsuario(3)}>
                    <div className="imagen">

                    </div>
                    <div>
                        <h4>Ambas</h4>
                        <p>
                            Nam ut justo placerat, eleifend sem at, finibus velit.
                        </p>
                    </div>

                </div>
                <input className="botoncontinuar" type="button" id="buttonLogin" value="Continuar" onClick={() => continuar()} />
                <p>{message == 1 ?"":"Debes elegir el tipo de usuario"}</p>
            </div>
        </div>
    )
}







export default TipoUsuario;