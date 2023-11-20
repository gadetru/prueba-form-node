const express = require("express");
const path = require("path");
const router = express.Router();
// Ruta base de este archivo: localhost:3000/

// localhost:3000/
router.get("/", (req, res) => { 
    res.render('navbar',{body:'home'});
});



module.exports = router;
