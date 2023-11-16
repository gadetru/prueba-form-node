
const {mongoose} = require("mongoose");

const MONGODBURL =process.env.MONGODBURL;
mongoose.connect(MONGODBURL) ;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');
});

