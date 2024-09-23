const jwt = require('jsonwebtoken')

function validadorDeCokie(req,res, next){
    const token = req.cookies.TokenAulaBE

    if(!token){
        return res.status(401).send({mensagem:'não autorizado'})
    }
    try{
        
    const decodificado = jwt.verify(token, process.env.chave_criptografia)

    }catch{
        return res.status(401).send({mensagem:'não autorizado'})
    }

    next()
}

module.exports = {validadorDeCokie}