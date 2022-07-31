const router = require("express").Router();
const user = require("../controllers/user.controllers")
const categ = require("../controllers/categorias.controllers")

router.post("/registro",user.registrer);
router.post("/login",user.login);
router.get("/categories", categ.getCategories);
// router.post("/logOut",user.logOut);


module.exports = router;
