const express = require("express");
const router = express.Router();

const pool = require('../database');


router
.route("/cadastro")
//create cliente
.post(async (req, res) => {
    try {
        const {cli_email , cli_senha, cli_cpf, cli_nome, cli_telefone, cli_data_nascimento} = req.body;
        const newCliente = await pool.query("INSERT INTO clientes (cli_email , cli_senha, cli_cpf, cli_nome, cli_telefone, cli_data_nascimento) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [cli_email , cli_senha, cli_cpf, cli_nome, cli_telefone, cli_data_nascimento]);
        res.json(newCliente.rows[0]);
    } catch (err) {
        console.log("The item could not be added!" + err.message);
    }
})
router
.route("/id:/alter_cliente")
//uptade cliente 
.put(async (req, res) =>{
    try {
        //const {cli_id} = req.params;
        const {cli_id, cli_nome, cli_cpf} = req.body;
        const updateResource = await pool.query("UPDATE clientes SET cli_nome = $1, cli_cpf = $2 WHERE cli_id = $3", [cli_nome, cli_cpf, cli_id]);
        res.json("The item was updated!");
    } catch (err) {
        console.log("The item could not be changed!" + err.message);
    }
})

//delete cliente
.delete(async (req, res) =>{
    try {
        const {cli_id} = req.body;
        const deleteResource = await pool.query("DELETE FROM clientes WHERE cli_id = $1", [cli_id]);
        res.json("The item was deleted!");
    } catch (err) {
        console.log("Could not delete item!" + err.message);
    }
});

//Read cliente
router
.route("/:id")
.get(async(req, res) =>{
    try {
        const {id} = req.params;
        const cliente = await pool.query("SELECT * FROM clientes WHERE cli_id = $1", [id]);
        res.json(cliente.rows[0]);
    } catch (err) {
        console.log("The itens could not be found!" + err.message);
    }
})


module.exports = router;
