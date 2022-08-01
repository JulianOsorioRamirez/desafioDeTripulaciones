const mongoose = require("mongoose");

const objetoSchema={
    km: String,
    asunto: String,
    fechaCreacion: String,
    fotoMiembro: String,
    nombreApellidos: String,
    texto: String,


};
const userSchema = mongoose.Schema(objetoSchema, { versionKey: false })
const Solicitudes = mongoose.model("solicitudes", userSchema);





module.exports = Solicitudes;