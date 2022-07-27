

// const userSchema = new mongoose.Schema(
// {
//     name: String,
//     unName: String,
//     dni: String,
//     pass: String,
//     passConf: String,
//     number: Number,
//     postalCode: String,

// }
// )

// const User = model('Usuarios', userSchema);

// module.exports = User;

//




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