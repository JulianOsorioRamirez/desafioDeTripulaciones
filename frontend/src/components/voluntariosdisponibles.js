import React, { useState, useEffect } from "react";




function Voluntariosdisponibles(props){
    useEffect(() => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                categoria: props.categoria
              
      
            }),
          };
      
          fetch("voluntariosdisponibles", requestOptions)
            .then((res) => res.json())
            .then((res) =>{


            })
    }, []);




return (

    <div className="horizontal-scroll-wrapper">
        
    </div>
)


}
export default Voluntariosdisponibles