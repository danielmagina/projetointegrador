const fs = require('fs');
const path = require('path');

const usersJSON = path.join('users.json');

module.exports = {
  criar ({ nome, email, senha }) {
    if (!nome || !email || !senha) return

    const usuariosCadastrados = JSON.parse(fs.readFileSync(usersJSON));
    usuariosCadastrados.push({ nome, email, senha });
    return fs.writeFileSync(usersJSON, JSON.stringify(usuariosCadastrados));
  },

  buscar ({ email }) {
    const usuariosCadastrados = JSON.parse(fs.readFileSync(usersJSON));
    return usuariosCadastrados.find(usuario => usuario.email === email);
  }
}