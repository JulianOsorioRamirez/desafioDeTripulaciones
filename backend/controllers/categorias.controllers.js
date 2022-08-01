const Categorias = require("../models/categModels");


const categories = {

    getCategories : async (req, res) => {

       var categorias =  await Categorias.find() 
          
        console.log(categorias)
        res.json(categorias)



    },

    postCategories2 : async (req, res) => {
console.log(req.body.Categorias)
        var categorias2 =  await Categorias.findOne({Categorias: req.body.Categorias}) 
           
         console.log(categorias2)
        res.json({categorias2});
 
 
 
     }
}

module.exports = categories;