
const {Cliente} = require ('../models');

module.exports = {
    async index(req, res, next) {
        try{  
        const clientes = await Cliente.findAll();
 
        return res.render('clientes', { clientes});
        } catch (erro){
          console.log(erro)
        }
      }
}