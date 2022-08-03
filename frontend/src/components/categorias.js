import React, {useEffect, useState} from 'react'
import Navbar from './Navbar';
import { useParams } from "react-router-dom";
import Voluntariosdisponibles from './voluntariosdisponibles';
import Solicitudes from './Solicitudes/Solicitudes';

function Categorias (){
   const { todo, usuario} = useParams()
   const [categories, setCategories] = useState('');


  
   useEffect(() => {
   
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Categorias: todo,
       

      }),
    };


     fetch("/categories2",requestOptions)
     .then((response) => response.json())
     .then((res)=> {
      setCategories(res)
     
    
    
    })
 }, []);




  return (
    <div>
    
    <Navbar usuario={usuario} />
    
 <div className='descriptCont'>
     <h4 id="titleCat">{categories == ""? "":categories.categorias2.Categorias}</h4>
    <p id="textCat">{categories == ""? "" :categories.categorias2.Descripcion}</p> 

  </div>
        { categories!=""? <Voluntariosdisponibles categoria={categories} usuario={usuario}/>  :"" }
  <Solicitudes usuario={usuario}/>

    
    </div>

    
    
  )
}


export default Categorias;