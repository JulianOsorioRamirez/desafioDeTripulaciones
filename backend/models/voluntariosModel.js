const mongoose = require("mongoose");

const objetoSchema={
    Nombre: String,
    Apellidos: String,
    "Nombre y Apellidos": String,
    Movil: String,
    "Codigo Postal": String,
    Pass: String,
    Perfil: String,
    "Servicios Disponibles": Array,
    Status: String,
    FotoV: String,
    Bio: String,
    "Fecha inscripcion": String,
    Estrellas:String,
    N_opinion: String


};
const userSchema = mongoose.Schema(objetoSchema, { versionKey: false })
const User = mongoose.model("voluntarios", userSchema);





module.exports = Voluntarios;