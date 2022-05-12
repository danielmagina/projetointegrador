module.exports = (sequelize, dataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        
        senha: {
            type: dataTypes.INTEGER,
            allowNull: false
        }

    }, {
        tableName: 'usuarios',
        timestamps: false
    });

    return Usuario;
};