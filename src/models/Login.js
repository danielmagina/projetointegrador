module.exports = (sequelize, DataType) => {
    const Login = sequelize.define('Login',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true ,
            allowNull: false
        },
        clientes_id: {
            type: DataType.INTEGER,
            allowNull: false
        },
        email: {
            type: DataType.STRING,
            allowNull: false
        },
        senha: {
            type: DataType.STRING,
            allowNull: false
        }
    }, {
    tableName:'login',
    timestamps: false
    });

    Login.associate = (models) => {
        Login.belongsTo(models.Cliente, {
            foreignKey: 'login_id',
            as: 'login'
        })
    }
    
    return Login;
    }