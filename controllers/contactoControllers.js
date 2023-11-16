const userQuery = require('../models/contactoModels');
const nodemailer = require('../utils/nodemailer')

class ContactoCtrl {

 crear =  async (req, res) => {
    const{nombre,correo,asunto,mensaje} = req.body;
    const newQuery = new userQuery({username:nombre,userEmail:correo,userSubject:asunto,userQuery:mensaje})
    await newQuery.save();
    nodemailer(correo,nombre);
    console.log('vamos',newQuery);
    res.redirect('/home');
};

  }



module.exports =  new ContactoCtrl;
