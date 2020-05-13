const express = require('express')
let app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/prueba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.get('/', (req, res) => {
    res.send('hola mundo')
})

const rutas_usuarios = require('./rutas/usuarios.rutas')
app.use(rutas_usuarios)

app.listen(8080, () => {
    console.log('SERVIDOR FUNCIONANDO')
})