const Categorias = require("../models/categModels");


const categories = {

    getCategories : async (req, res) => {

       var categorias =  await Categorias.find() 
          
       
        res.json(categorias)



    },

    postCategories2 : async (req, res) => {

        var categorias2 =  await Categorias.findOne({Categorias: req.body.Categorias}) 
           
       
        res.json({categorias2});
 
 
 
     }
}

module.exports = categories;