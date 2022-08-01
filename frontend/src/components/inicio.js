import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

function Inicio(props) {
    const navigate = useNavigate()
    function donar() {
        
        window.location.href = 'https://www.emancipatic.org/';

    }


    return (
        <div className="inicio">
            <div className="imagendonar">
                <div className="donar">
                    <h4>Donaciones</h4>
                    <input className="botoncontinuar" type="button" id="buttonLogin" value="CTA" onClick={() => donar()} />
                </div>
            </div>



        </div>
    )

}


export default Inicio