const express = require("express");
const router = express.Router();
const controlador_clientes = require("../controladores/control_cliente");
const { validadorDeCokie } = require("../middlewares/validadorDeCookie"); 



router.get("",validadorDeCokie, controlador_clientes.listClientes);
router.get("/:id",validadorDeCokie, controlador_clientes.getCliente);
router.post("",validadorDeCokie, controlador_clientes.createCliente);
router.post("/:id",validadorDeCokie, controlador_clientes.updateCliente);
router.delete("/:id",validadorDeCokie, controlador_clientes.deleteCliente);

module.exports = router;
