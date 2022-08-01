import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import CabeceraCateg from '../assets/images/cabeceraCateg.png'


function CategTotal (){

  const [categories, setCategories] = useState('');
  const [cambio, setCambio] = useState('');

  useEffect(() => {
    fetch("categories")
    .then((response) => response.json())
    .then((res)=> setCategories(res))
}, []);

useEffect(()=>{
  if(categories){
    console.log(categories)
  }
},[categories]);

useEffect(()=>{
if(cambio !== ''){
window.location.assign(`/categories2/${cambio.Categorias}`)
}

  

},[cambio])
  return (
    <div>
       <Navbar/>
       <div className='ContainerCateg'>

     <img id='imgCabecera' src={CabeceraCateg}/> 

    
        
          {categories ? categories.map((todo, i) =>
    

    <div className='cards' onClick={()=>setCambio(todo)}>
      
      <img className="imgCards" src={require(`../assets/images/`+todo.img)}/>
      <h4 className='cardTitles'>{todo.Categorias}</h4> 
      <p className='cardText'> {todo.Descripcion}</p>

      </div> ) : " "}
         

        
      
      
      </div>
     

   <div className='footerCont'>
      <div id='footer'>
        <a id='donate' href='#'>¿Quieres donar?</a>
      </div>
</div>
     
        </div>
  )
}


export default CategTotal;