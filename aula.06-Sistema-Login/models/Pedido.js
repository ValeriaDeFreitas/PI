// ORM - Sequelize
import Sequelize from "sequelize";
//Configuração do Sequelize
import connection from "../config/sequelize-config.js";
//.define cria a tabela no banco
const Pedido = connection.define('pedido', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
});
//Não força a criação da tabela caso já exista
Pedido.sync({ force: false })
export default Pedido;