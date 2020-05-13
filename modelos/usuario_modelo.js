const mongoose = require('mongoose')

const Schema = mongoose.Schema({

    nombre: String,
    
    telefono: String,
    
    edad: Number,
    
    genero: {
        type: String,
        default: 'no definido'
    },
    
    fecha: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Usuario', Schema)