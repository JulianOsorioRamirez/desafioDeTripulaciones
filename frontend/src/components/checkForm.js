
import React, { useState, useEffect } from "react";





//Componente funcional -> 
function CheckForm() {

let name = "Juan"
let location = "Madrid"




return (
<div>
<div className="checkFormBox">
    <div className="checkFormContainer">
       <h1 className="checkViewH1">Quieres ser voluntario</h1>
       <div className="checkText1">
       <p className="FormText1"> Te llamas {name} y vives en {location}, ¿es correcto?</p>
       </div>
       <div className="checkContainer1"> 
       <label className="labelCheck1">
        <input type="radio" className="check1" id="check1" />
        <span>Sí</span>
      </label>
      <label>
        <input type="radio" className="check1" />
        <span>No</span>
      </label>
       </div>
       <div className="checkText1">
       <p className="FormText1">¿En que crees que puedes ayudar?</p>
       </div>
       <div className="checkContainer2"> 
       <label className="labelCheck2">
        <input type="checkbox" className="check2" id="check1" />
        <span className="span3">Salud</span>
      </label>
      <label className="labelCheck3">
        <input type="checkbox" className="check2" />
        <span className="span3">Tareas diarias</span>
      </label>
      <label className="labelCheck4">
        <input type="checkbox" className="check2" id="check1" />
        <span className="span3">Ocio y amistad</span>
      </label>
      <label className="labelCheck5">
        <input type="checkbox" className="check2" />
        <span className="span3">Burocracia</span>
      </label>
      <label className="labelCheck6">
        <input type="checkbox" className="check2" id="check1" />
        <span className="span3">Servicios del municipio</span>
      </label >
      <label className="labelCheck7">
        <input type="checkbox" className="check2" />
        <span className="span3">Nuevas tecnologías</span>
      </label>
       </div>
       <div className="checkContainer3">
       <p className="FormText2">¿Hasta donde puedes ayudar?</p>
       <label className="labelCheck8">
        <input type="checkbox" className="check2" id="check1" />
        <span className="span3">Rango de km</span>
      </label >
      <label className="labelCheck9">
        <input type="checkbox" className="check2" />
        <span className="span3">Solo mi municipio</span>
      </label>
       </div>
      <input type="button" id="buttonCont" className="buttonCont" value="Continuar"/>
    </div>
    

</div>
</div>


  );

}

export default CheckForm;