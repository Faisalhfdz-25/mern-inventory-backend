import { Sequelize } from "sequelize";

import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
}, {
    freezeTableName: true
});

export default Product;


(async () => {
    await db.sync();
})();