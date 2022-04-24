
const {Clientes} = require ('../models');

module.exports = {
    async index(req, res, next) {
        try{  
        const clientes = await Clientes.findAll();
 
        return res.render('clientes', { clientes});
        } catch (erro){
          console.log(erro)
        }
      }
}