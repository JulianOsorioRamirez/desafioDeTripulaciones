const bcrypt = require("bcrypt");
const Usuarios = require('../models/userModels')

const user = {
  registrer: (req, res) => {
    

    const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const unNameExp = new RegExp(/^([A-Za-z]{1,15})$/);
    const telfExp = new RegExp(/^\d{9}$/);
    const passExp = new RegExp(
      /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{6,16}/
    );
    const postalCode = new RegExp(/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/)


    const name = req.body.name
    const unName = req.body.unName
    const pass = req.body.pass
    const number = req.body.number
    const cp = req.body.postalCode
    const passConf = req.body.passConf
    let fecha = new Date()
        var fecha1 = fecha.getFullYear() + '-' + (fecha.getMonth() + 1) + '-' + fecha.getDate();




    if (

      !nameExp.test(name) ||
      !unNameExp.test(unName) ||
      !passExp.test(pass) ||
      pass != passConf ||
      !telfExp.test(number) ||
      !postalCode.test(cp)
    ) {
  
      //res.send

    } else {
      
      bcrypt.hash(pass, 10, (err, palabraSecretaEncriptada) => {
        if (err) {

        } else {

          palabraEncriptada = palabraSecretaEncriptada;


        }
        let userJson2 = {
          Nombre: name,
          Apellidos: unName,
          'Nombre y Apellidos': `${name} ${unName}`,
          'Movil':number,
          CP: cp,
          pass: palabraEncriptada,
          'Foto miembro':'',
          'fecha de inscripcion':fecha1
          
        };
        let UsuarioRegistrado = new Usuarios(userJson2)
        UsuarioRegistrado.save(function (err, UsuarioRegistrado) {
res.json({usuario: UsuarioRegistrado})

        })
      });
      
    }
  },
  login: async (req, res) => {
    const telf = req.body.telf
    const pass = req.body.pass
   
    var login = await Usuarios.findOne({ Movil: telf })


    if (login == null) {
      res.json({ logeado: false })
    } else {
      bcrypt.compare(pass, login.pass).then(function (result) {
        if (result === true) {
          res.json({ logeado: login.Nombre })

        } else {
          res.json({ logeado: false })
        }
      });

    }

  }
}

module.exports = user;