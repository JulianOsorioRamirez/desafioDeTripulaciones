const Categorias = require("../models/categModels");


const categories = {

    getCategories : () => {

        Categorias.find(function(err, categ) {
            if (err) return console.error(err);
            console.log(categ)
        })



    }

}

module.exports = categories;