module.exports = (sequelize, DataType) => {
const Cliente = sequelize.define('Cliente',{
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
        allowNull: true
    },
    email: {
        type: DataType.STRING,
        allowNull: false
    },
    endereço: {
        type: DataType.STRING,
        allowNull: true
    },
    CEP: {
        type: DataType.STRING,
        allowNull: true
    },
    bairro: {
        type: DataType.STRING,
        allowNull: true
    },
    cidade: {
        type: DataType.STRING,
        allowNull: true
    },
    estado: {
        type: DataType.STRING,
        allowNull: true
    },
    complemento: {
        type: DataType.STRING,
        allowNull: true
    }
}, {
tableName:'clientes',
timestamps: false
});

Cliente.associate = (models) => {
    Cliente.hasMany(models.Venda, {
        foreignKey: 'clientes_id',
        as: 'vendas'
    })
}

return Cliente;
}