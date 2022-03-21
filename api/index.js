const express = require("express");
const cors = require("cors");
const cliente = require("./routes/cliente");
const cadastro = require("./routes/cadastro")
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/cliente", cliente);

app.listen(3001, () => {
    console.log("Server up in port 3001");
});