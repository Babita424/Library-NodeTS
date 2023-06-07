import { Sequelize } from "sequelize-typescript";

const sequelize=new Sequelize({
    database:'library_db',
    dialect:'postgres',
    username:'postgres',
    password:'albatross0716',
    host:'localhost',
    port:5432
});

export default sequelize;
