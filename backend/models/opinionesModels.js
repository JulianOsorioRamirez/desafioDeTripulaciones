const mongoose = require("mongoose");

const objetoSchema={
    nombreVoluntario: String,
    serviciosDisponibles: Array,
    estrellas: Number,
    opinion: String,
    nombreMiembro: String,
    fotoMiembro: String

};
const userSchema = mongoose.Schema(objetoSchema, { versionKey: false })
const Opiniones = mongoose.model("opiniones", userSchema);





module.exports = Opiniones;