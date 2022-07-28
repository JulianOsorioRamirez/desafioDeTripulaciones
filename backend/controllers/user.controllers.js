const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const mongoose = require("mongoose");
const UserModel = require("../models/userModels");
var productID;



const connection = require("../database/sqlDataBase");
const mysql = require("mysql");
const { propfind } = require("moongose/routes");
const bcrypt = require("bcrypt");
const Usuarios = require('../models/userModels')

const user = {
   registrer : (req,res) => {

      const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
      const unNameExp = new RegExp(/^([A-Za-z]{1,15})$/);
      const telfExp = new RegExp(/^\d{9}$/);
      const dniExp = new RegExp(/^\d{8}[a-zA-Z]$/);
      const passExp = new RegExp(
        /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}/
      );
      const postalCode = new RegExp(/^(?:0[1-9]\d{3}|[1-4]\d{4}|5[0-2]\d{3})$/)
    
    
    const name = req.body.name
    const unName = req.body.unName
    const dni = req.body.dni
    const pass = req.body.pass
    const number = req.body.number
    const cp = req.body.postalCode
    const passConf = req.body.passConf
    

    
    
    if (
      
      !nameExp.test(name) ||
      !unNameExp.test(unName) ||
      !dniExp.test(dni) ||
      !passExp.test(pass) ||
      pass != passConf ||
      !telfExp.test(number)||
      !postalCode.test(cp)
    ) {
      
      //res.send
    
    }else {
     bcrypt.hash(pass, 10, (err, palabraSecretaEncriptada) => {
        if (err) {
         
        } else {
      
          palabraEncriptada = palabraSecretaEncriptada;
         
          
        }
        let userJson2 = {
          name: name,
          unName: unName,
          dni: dni,
          pass: palabraEncriptada,
          number: number,
          postalCode: cp,
      };
        let UsuarioRegistrado = new Usuarios(userJson2)
        UsuarioRegistrado.save(function (err, UsuarioRegistrado) {
           
           
        })
      });
      res.send(true)
     }
   },
   login : async (req,res) => {
      const telf = req.body.telf
      const pass = req.body.pass
      var login = await Usuarios.findOne({ number: telf})

    
      if(login.length==0){
        res.json({logeado:false})
      }else{
        bcrypt.compare(pass, login.pass).then(function (result) {
        if(result===true){
           res.json({logeado: true})
           
      }else{
        res.json({logeado:false})
      }
      });
         
   }
   
  }
}

module.exports = user;