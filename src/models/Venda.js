module.exports = (sequelize, DataType) => {
    const Venda = sequelize.define('Venda',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true ,
            allowNull: false
        },
        data_pedido: {
            type: DataType.STRING,
            allowNull: false
        },
        clientes_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        carros_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        status: {
            type: DataType.BOOLEAN,
            allowNull: false
        }
    }, {
    tableName: 'vendas',
    timestamps: false
    });
    
    Venda.associate = (models) => {
        Venda.belongsTo(models.Carro, {
            foreignKey: 'carros_id',
            as: 'carros'
        });
        Venda.belongsTo(models.Cliente, {
            foreignKey: 'clientes_id',
            as: 'clientes'
        })
    }

    return Venda;
    }