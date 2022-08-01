const Solicitudes = require("../models/solicModels");


const solicitudes = {

    getSolicitudes : async (req, res) => {

       var solic =  await solicitudes.find() 
          
      
        res.json(solic)



    },

    postSolicitudes : async (req, res) => {

        var postSolicit =  await Solicitudes.findOne({asunto: req.body.asunto}) 
           
       
        res.json({postSolicit});
 
 
 
     }
}

module.exports = solicitudes;