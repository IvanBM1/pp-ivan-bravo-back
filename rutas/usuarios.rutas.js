const express = require('express')
let router = express.Router()

const UsuariosRecurso = require('../recursos/usuarios.recurso')

router.post('/usuario', UsuariosRecurso.crearUsuario)

router.get('/usuarios', UsuariosRecurso.obtenerUsuarios)

router.get('/usuarios/reporte', UsuariosRecurso.reporteUsuarios)

router.delete('/usuario/:usuario_id', UsuariosRecurso.borrarUsuario)

module.exports = router