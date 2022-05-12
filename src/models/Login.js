module.exports = (sequelize, DataType) => {
    const Login = sequelize.define('Login',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true ,
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
    
    return Login;
    }