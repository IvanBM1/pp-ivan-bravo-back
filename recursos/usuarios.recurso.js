const UsuarioModelo = require('../modelos/usuario_modelo')

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    borrarUsuario,
    reporteUsuarios
}

function crearUsuario(req, res) {

    let usuario_modelo = new UsuarioModelo({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        edad: req.body.edad,
        genero: req.body.genero
    })

    usuario_modelo.save((err, usuario_modelo) => {

        if(err)
            return res.status(400).send('Error al agregar usuario')
        
        res.send(usuario_modelo)
    })
}

function obtenerUsuarios(req, res) {

    const nombre_enviado = req.query.nombre

    let condicion = {}

    if(nombre_enviado && nombre_enviado != '')
        condicion = {
            nombre: nombre_enviado
        }

    UsuarioModelo.find(condicion).exec((err, usuarios) => {

        if(err)
            return res.send('error al consultar los datos')

        return res.send(usuarios)
    })
}

function borrarUsuario(req, res) {

    const usuario_id = req.params.usuario_id

    UsuarioModelo.deleteOne({ _id: usuario_id }).exec((err, resp) => {

        if(err)
            return res.send('error al borrar al usuario')

        return res.send({
            success: 'todo correcto'
        })
    })
}

function reporteUsuarios(req, res) {

    let fechaReferencia = new Date()
        fechaReferencia.setDate(fechaReferencia.getDate() - 3)

    const condiciones = {
        edad: { $gte: 18 },
        genero: { $eq: 'Masculino' },
        fecha: { $gte: fechaReferencia }
    }

    // $eq:  igual a
    // $gte: mayor igual
    // $gt:  mayor
    // $lte: menor igual
    // $lt:  menor

    UsuarioModelo
        .find(condiciones)
        .select({
            _id: false,
            nombre: true,
            telefono: true,
        })
        .exec((err, usuarios) => {

        if(err)
            return res.send('Error al consultar  los usuario')

        return res.send(usuarios)
    })
}