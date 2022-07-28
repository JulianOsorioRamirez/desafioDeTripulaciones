const mongoose = require("mongoose");
const bdm = 'mongodb://localhost:27017/Datosusuarios';
mongoose.connect(bdm, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Connect DateBase");
    })
    .catch((err) => {
        console.error(err);
    });