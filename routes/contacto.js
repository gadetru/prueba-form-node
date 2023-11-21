const express = require("express");
const path = require("path");
const contactoCtrl = require('../controllers/contactoControllers')
const router = express.Router();
// Ruta base de este archivo: localhost:3000/home

// localhost:3000/contacto
router.get("/", (req, res) => {
    res.render('navbar',{body:'contacto'});
});
// localhost:3000/contacto/preguntas
router.get("/preguntas",contactoCtrl.renderizar);



router.post("/enviar", contactoCtrl.crear);


module.exports = router;