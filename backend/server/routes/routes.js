const router = require("express").Router();
const user = require("../controllers/user.controllers")


router.post("/registro",user.registrer);
router.post("/login",user.login);
router.post("/logOut",user.logOut);


module.exports = router;
