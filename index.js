
const express = require("express");
const path = require("path");
const homeRouter = require("./routes/home.js");
const tosRouter = require("./routes/tos.js");
const contactoRouter = require("./routes/contacto.js");
require('dotenv').config();
require('./config/db.js')

const app = express();
const port = 3000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware para definir la ruta actual
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});


app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Ruta base del servidor: localhost:3000
app.use("/home", homeRouter);
app.use("/tos", tosRouter);
app.use("/contacto", contactoRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


