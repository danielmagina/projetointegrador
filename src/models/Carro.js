module.exports = (sequelize, dataTypes) => {
    const Carro = sequelize.define('Carro', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        modelo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        
        ano: {
            type: dataTypes.STRING,
            allowNull: false
        },

        cor: {
            type: dataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'carros',
        timestamps: false
    });

    Carro.associate = (models) => {
        Carro.belongsTo(models.Venda, {
            foreignKey: 'carros_id',
            as: 'carrosvendas'
        })
    }
    
    return Carro;
};