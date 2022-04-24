module.exports = (sequelize, DataType) => {
const Clientes = sequelize.define('Clientes',{
    id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true ,
        allowNull: false
    },
    nome: {
        type: DataType.STRING,
        allowNull: false
    },
    telefone: {
        type: DataType.STRING,
        allowNull: false
    },
    email: {
        type: DataType.STRING,
        allowNull: false
    },
    endereço: {
        type: DataType.STRING,
        allowNull: false
    },
    CEP: {
        type: DataType.STRING,
        allowNull: false
    },
    bairro: {
        type: DataType.STRING,
        allowNull: false
    },
    cidade: {
        type: DataType.STRING,
        allowNull: false
    },
    estado: {
        type: DataType.STRING,
        allowNull: false
    },
    complemento: {
        type: DataType.STRING,
        allowNull: false
    }
}, {
tableName:'clientes',
timestamps: false
});

return Clientes;
}