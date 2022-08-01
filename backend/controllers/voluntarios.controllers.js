const Voluntarios = require('../models/voluntariosModels')

const voluntarios = {
    buscar : async (req, res) => {
var nombre_categoria = req.body.categoria.categorias2.Categorias
var voluntariosdisponible = await Voluntarios.find({"Servicios Disponibles":nombre_categoria})
res.json({voluntarios:voluntariosdisponible})
    }

}

module.exports = voluntarios;