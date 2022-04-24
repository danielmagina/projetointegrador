module.exports = (sequelize, DataType) => {
    const Compras = sequelize.define('Compras',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true ,
            allowNull: false
        },
       documentação: {
            type: DataType.STRING,
            allowNull: false
        },
       
    }, {
    tableName: 'compras',
    timestamps: false
    });
    
    return Compras;
    }