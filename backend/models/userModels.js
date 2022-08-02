const mongoose = require("mongoose");

const objetoSchema={
    Nombre: String,
    Apellidos: String,
    'Nombre y Apellidos':String,
    'Movil':String,
    CP:String,
    pass:String,
    'Foto miembro':String,
    'Fecha inscripcion':Date





};
const userSchema = mongoose.Schema(objetoSchema, { versionKey: false })
const User = mongoose.model("miembros", userSchema);





module.exports = User;