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

            <div id="burgerBox">
            <p id="burgerText">Menú</p>
            <p id='hamburguesa' onClick={handleClick}>p</p>
            </div>
            <div id="saludo">
                <img className='picture' src= {Picture}/>
                <h3>Hola, Pepito</h3>
            </div>
    
       

        <div className='menu' style={{display: isShown ? 'block' : 'none'}}>
            <ul className='list'>
                <li className='menuLista'><a Link='#'>Categorías</a></li>
                <li className='menuLista'><a Link='#'>Notificación</a></li>
                <li className='menuLista'><a Link='#'>Perfil</a></li>
                <li className='menuLista'><a Link='#'>DONA</a></li>
                <li className='menuLista'><a Link='#'>Desconectar</a></li>
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

