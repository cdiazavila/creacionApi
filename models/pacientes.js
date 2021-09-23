const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const pacientesSchema = new Schema({
    cc: {
        type: String,
        trim: true
    },
    
    nombre: {
        type: String,
        trim: true
    },

    apellidos:{
        type:String,
        trim:true
    },
    telefono: {
        type: String,
        trim: true
    }
});

module.exports  = mongoose.model('Paciente', pacientesSchema);
