
const {Cliente} = require ('../models');

module.exports = {
    async index(req, res) {
        try{  
        const clientes = await Cliente.findAll();
 
       res.render('clientes', { clientes});
        } catch (erro){
          console.log(erro)
        }
      }
}