import React from 'react'
import Navbar from '../components/Navbar';
import CabeceraCateg from '../assets/images/cabeceraCateg.svg'


function CategTotal (){
  return (
    <div>
       <Navbar/>
       <div className='ContainerCateg'>

      <img id='imgCabecera' src={CabeceraCateg}/>
      <div className='cardsAssis'>
        <div className='subcardAssis'>
        <h4>Nuevas Tecnologías</h4>
        <p>¿Necesitas Asistencia con tu móvil, ordenador o televisión?</p>
        </div>
      </div>

      </div>
        </div>
  )
}


export default CategTotal;