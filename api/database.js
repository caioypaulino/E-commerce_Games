const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "2323",
    host: "localhost",
    port: 5432, // verifique se esta é a porta configurada pelo postgres
    database: "Cliente"
});

module.exports = pool;