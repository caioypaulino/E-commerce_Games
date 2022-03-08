const express = require("express");
const cors = require("cors");
const cliente = require("./routes/cliente");
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use("/cliente", cliente);

app.listen(3000, () => {
    console.log("Server up in port 3000");
});