const {Schema,model} = require('mongoose');


const UserQuery = new Schema({
    username: {type: String ,required: true},
    userEmail: {type: String, required: true},
    userSubject: {type: String, required: true},
    userQuery: {type: String, required: true},
},
{timestamps:true  // me creará por defecto dos propiedades , cuando se creó y cuando se actualizó
});

  module.exports = model('UserQuery',UserQuery);