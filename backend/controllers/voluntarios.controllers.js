const Voluntarios = require('../models/voluntariosModels')
const Opiniones = require('../models/opinionesModels')

const voluntarios = {
    buscar : async (req, res) => {
        var volun = []
       
   var nombre_categoria = req.body.categoria
   var voluntariosdisponible = await Voluntarios.find({serviciosDisponibles : nombre_categoria})
   
   for(let i =0;i<5;i++){
    volun.push(voluntariosdisponible[i])
   }
   
   res.json({voluntarios:volun})
    },
    buscar1 : async (req, res) => {
        var voluntario = await Voluntarios.findOne({nombreApellidos : req.body.nombre})
        res.json({voluntario})
        
    },
    buscar2 : async (req, res) => {
        var opinion = await Opiniones.find({nombreVoluntario : req.body.nombre})
        res.json({opinion})
    }

}

module.exports = voluntarios;