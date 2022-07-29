
import React, { useState, useEffect } from "react";
import member from "../assets/images/member.png"
import voluntary from "../assets/images/voluntariosImg.png"
import Ambos from "../assets/images/Ambos.png"







function Options() {






  return (
   <div>
     
      <div className="opstionsTextC">
      <p class="optionsText">
      ¿Qué papel quieres tener en la red?
      </p>
      </div>
      <div className="imgMember">
        <img className="memberImg" src={member} alt="" />
      </div>
      <div class="Card-tipos-miembro">
      <div>
      <p class="members">
          Miembros
         </p>
      <p class="textCardOptions">
         Elige esta opción si buscas a alguien que te acompañe para solucionar tus problemas.
      </p>
      </div>
    </div>
    
    <div className="imgMember2">
     
            <img className="memberImg2" src={voluntary} alt="" />
     
      </div>
    <div class="Card-tipos-miembro2">
      <div>
      <p class="members">
           Voluntarios
         </p>
      <p class="textCardOptions">
         Elige esta opción si buscas aportar tu granito de arena a la comunidad de mayores
      </p>
      </div>
    </div>
    <div className="imgMember">
     
            <img className="memberImg3" src={Ambos} alt="" />
     
      </div>
    <div class="Card-tipos-miembro3">
      <div>
      <p class="members">
          Ambos
         </p>
      <p class="textCardOptions">
         Elige esta opción si buscas las dos anteriores opciones
      </p>
      </div>
    </div>

      
   </div> 
    

  );

}

export default Options;