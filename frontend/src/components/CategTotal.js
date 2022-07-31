import React from 'react'
import Navbar from '../components/Navbar';
import CabeceraCateg from '../assets/images/cabeceraCateg.svg'
import NuevasT from '../assets/images/imgNuevasT.png'
import Salud from '../assets/images/imgSalud.png'
import Amigos from '../assets/images/imgAmigos.png'
import DiaDia from '../assets/images/imgDiaDia.png'
import Burocracia from '../assets/images/imgBurocracia.png'
import Servicios from '../assets/images/imgServicios.png'
import { useParams } from "react-router-dom";


function CategTotal (){
  const { usuario} = useParams()
  return (
    <div>
       <Navbar usuario={usuario}/>
       <div className='ContainerCateg'>

      <img id='imgCabecera' src={CabeceraCateg}/>

      <div id="cards">
      <div className='cardsAssis'>
        <div className='subcardAssis'>
          <img className="imgCards" src={NuevasT}/>
        <h4 className='cardTitles'>Nuevas Tecnologías</h4>
        <p className='cardText'>¿Necesitas Asistencia con tu móvil, ordenador o televisión?</p>
        </div>
      </div>
      <div className='cardsAssis'>
        <div className='subcardAssis'>
        <img className="imgCards" src={Salud}/>
        <h4 className='cardTitles'>Salud</h4>
        <p className='cardText'>¿Quieres pedir cita médica por Internet o que alguien te acompañe?</p>
        </div>
      </div>
      <div className='cardsAssis'>
        <div className='subcardAssis'>
        <img className="imgCards" src={Amigos}/>
        <h4 className='cardTitles'>Amigos y Ocio</h4>
        <p className='cardText'>Entra aquí y conoce personas cercanas y afines a ti.</p>
        </div>
      </div>
      <div className='cardsAssis'>
        <div className='subcardAssis'>
        <img className="imgCards" src={DiaDia}/>
        <h4 className='cardTitles'>El día a día</h4>
        <p className='cardText'>¿Buscas compañía en tu rutina diaria o ayuda con las tareas cotidianas?</p>
        </div>
      </div>
      <div className='cardsAssis'>
        <div className='subcardAssis'>
        <img className="imgCards" src={Burocracia}/>
        <h4 className='cardTitles'>Burocracia</h4>
        <p className='cardText'>¿No sabes cómo gestionar tu papeleo por Internet?</p>
        </div>
      </div>
      <div className='cardsAssis'>
        <div className='subcardAssis'>
        <img className="imgCards" src={Servicios}/>
        <h4 className='cardTitles'>Servicios del Municipio</h4>
        <p className='cardText'>Entérate y disfruta de todos los planes en tu zona.</p>
        </div>
      </div>
      </div>

   <div className='footerCont'>
      <div id='footer'>
        <a id='donate' href='#'>¿Quieres donar?</a>
      </div>
</div>
      </div>
        </div>
  )
}


export default CategTotal;