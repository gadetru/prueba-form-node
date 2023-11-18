const userQuery = require('../models/contactoModels');
const nodemailer = require('../utils/nodemailer');

class ContactoCtrl {

  crear = async (req, res) => {
    try {
      const { nombre, correo, asunto, mensaje } = req.body;

      // Validar que los campos requeridos estén presentes
      if (!nombre || !correo || !asunto || !mensaje) {
        throw new Error('Todos los campos son obligatorios');
      }

      const newQuery = new userQuery({
        username: nombre,
        userEmail: correo,
        userSubject: asunto,
        userQuery: mensaje
      });

      await newQuery.save();
      nodemailer(correo, nombre);
      res.redirect('/home');
    } catch (error) {
      // Manejar el error de manera adecuada
      console.error('Error en la creación de la consulta:', error.message);
      
      // Puedes enviar un código de estado específico para indicar un error en el servidor
      res.status(500).send('Hubo un error en el servidor');
    }
  };
}

module.exports = new ContactoCtrl;