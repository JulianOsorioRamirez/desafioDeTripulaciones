import React, { useState, useEffect } from "react";




function Voluntariosdisponibles(props) {
    const [voluntarios, setVoluntarios] = useState("")
    const [cambio1, setCambio1] = useState("")

    useEffect(() => {
        console.log(props.categoria.categorias2.Categorias)
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                categoria: props.categoria.categorias2.Categorias


            }),
        };

        fetch("/voluntariosdisponibles", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                setVoluntarios(res.voluntarios)


            })
    }, [props]);




    return (
<div>
        <div className="horizontal-scroll-wrapper">
           
            {voluntarios !="" ? voluntarios.map((todo, i) =>
                <div className='.Card-voluntario' onClick={() => setCambio1(todo)}>
                    <div className="imgCardsDiv">
                    <img className="imgCards1" src={require(`../assets/images/` + todo.fotoV)} />
                    </div>
                    
                    <h4 className='cardTitles1'>{todo.nombre}</h4>
                    <p className='cardText1'> {todo.apellidos}</p>

                </div>) : " "} 
        </div>
        
        </div>
    )


}
export default Voluntariosdisponibles