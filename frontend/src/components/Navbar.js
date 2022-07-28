import React, {useState} from 'react'
import Picture from '../assets/images/fotoPerfil.png'


export const Navbar = () => {

    const [isShown, setIsShown] = useState(true);

    const handleClick = event => {
        setIsShown(current => !current);
    }


    return (
        <nav>
        <div id="navbar">

            <p id="symbol">@</p>
            <p id='hamburguesa' onClick={handleClick}>p</p>

            <div id="saludo">
                <img className='picture' src= {Picture}/>
                <h3>Hola, Pepito</h3>
            </div>
    
       

        <div className='menu' style={{display: isShown ? 'block' : 'none'}}>
            <ul className='list'>
                <li className='menuLista'><a href='#'>Categorías</a></li>
                <li className='menuLista'><a href='#'>Notificación</a></li>
                <li className='menuLista'><a href='#'>Perfil</a></li>
                <li className='menuLista'><a href='#'>DONA</a></li>
                <li className='menuLista'><a href='#'>Desconectar</a></li>
            </ul>
            <div id="menuOptions">
                <a href='#'>¿Quieres donar?</a>
            <div id="cta">
                <a href='#'>CTA</a>
            </div>
            </div>

        </div> 


        </div>
</nav>
    )
}

