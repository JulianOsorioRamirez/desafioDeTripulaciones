const mongoose = require("mongoose");

const objetoSchema={
    name: String,
    unName: String,
    dni: String,
    pass: String,
    number: Number,
    postalCode: Number,

};
const userSchema = mongoose.Schema(objetoSchema, { versionKey: false })
const User = mongoose.model("Usuarios", userSchema);





module.exports = User;