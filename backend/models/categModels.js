const mongoose = require("mongoose");

const objetoSchema={
    Categorias: String,
    Despcripcion: String,
    img: String,

};
const userSchema = mongoose.Schema(objetoSchema, { versionKey: false })
const Categories = mongoose.model("categorias", userSchema);





module.exports = Categories;