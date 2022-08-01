const Solicitudes = require("../models/solicModels");


const solicitudes = {

    getSolicitudes : async (req, res) => {

       var solic =  await solicitudes.find() 
          
        console.log(solic)
        res.json(solic)



    },

    postSolicitudes : async (req, res) => {
console.log(req.body.Solicitudes)
        var postSolicit =  await Solicitudes.findOne({asunto: req.body.asunto}) 
           
         console.log(postSolicit)
        res.json({postSolicit});
 
 
 
     }
}

module.exports = solicitudes;