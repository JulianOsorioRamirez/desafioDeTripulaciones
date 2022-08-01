const Voluntarios = require('../models/voluntariosModels')

const voluntarios = {
    buscar : async (req, res) => {
        var volun = []
        console.log(req.body.categoria)
   var nombre_categoria = req.body.categoria
   var voluntariosdisponible = await Voluntarios.find({serviciosDisponibles : nombre_categoria})
   
   for(let i =0;i<5;i++){
    volun.push(voluntariosdisponible[i])
   }
   console.log(volun)
   console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
   res.json({voluntarios:volun})
    }

}

module.exports = voluntarios;