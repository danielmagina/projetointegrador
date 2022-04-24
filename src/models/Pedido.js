module.exports = (sequelize, DataType) => {
    const Pedido = sequelize.define('Pedido',{
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
        compras_id: {
            type: DataType.INTEGER,
            allowNull: false
        },

        // FOREGN KEY ???????????????
       
    }, {
    tableName: 'pedido',
    timestamps: false
    });
    
    return Pedido;
    }