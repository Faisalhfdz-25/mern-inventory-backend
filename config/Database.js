import { Sequelize } from "sequelize";

const db = new Sequelize("mern_crud", "root", "", {
    localhost: "localhost:81",
    dialect: "mysql",
});

export default db;