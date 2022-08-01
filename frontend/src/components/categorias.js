import React, {useEffect, useState} from 'react'
import Navbar from './Navbar';
import { useParams } from "react-router-dom";
import Voluntariosdisponibles from './voluntariosdisponibles';
function Categorias (){
   const { todo} = useParams()
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
      console.log(categories)
    
    
    })
 }, [todo]);

 useEffect(()=>{
  if(categories){
    console.log(categories)
  }
}, [categories]);


  return (
    <div>
    
        <Navbar/>
    
 <div className='descriptCont'>
     <h4 id="titleCat">{categories == ""? "":categories.categorias2.Categorias}</h4>
    <p id="textCat">{categories == ""? "" :categories.categorias2.Descripcion}</p> 

  </div>
        <Voluntariosdisponibles categoria={categories}/>
  
{/*         
{categories ? categories.map((todo, i) =>
    
    <div className='cards2'>  
  <img className="imgCards" src={require(`../assets/images/`+todo.img)}/>
  <h4 className='cardTitles'>{todo.Categorias}</h4>
  <p className='cardText'>{todo.Descripcion}</p>
 </div> ) : " "} */}
    
    </div>

    
    
  )
}


export default Categorias;