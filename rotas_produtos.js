const express = require("express");
const router = express.Router();
const controlador_produtos = require("../controladores/control_produtos");
const { validadorDeCokie } = require("../middlewares/validadorDeCookie");

router.get("",validadorDeCokie, controlador_produtos.listProdutos);
router.get("/:id",validadorDeCokie, controlador_produtos.getProduto);
router.post("",validadorDeCokie, controlador_produtos.createProduto);
router.post("/:id",validadorDeCokie, controlador_produtos.updateProduto);
router.delete("/:id",validadorDeCokie, controlador_produtos.deleteProduto);

module.exports = router;
