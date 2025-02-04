const express = require("express");
const router = express.Router();
const controlador = require('../controladores/control_autenticacao')

router.post('/login', controlador.login)
router.post('/logout', controlador.logout)

module.exports = router;