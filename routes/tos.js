const express = require("express");
const path = require("path");
const router = express.Router();
// Ruta base de este archivo: localhost:3000/home

// localhost:3000/tos
router.get("/", (req, res) => {
    res.render('navbar',{body:'tos'});
});

module.exports = router;