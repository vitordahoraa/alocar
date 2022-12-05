const express = require('express');
const db = require('./Database/connection');
const cors = require('cors');
const { allowedNodeEnvironmentFlags } = require('process');

const app = express();

db.sync();
app.use(express.json());
app.use(cors());

app.use('/clientes',require("./Routes/clientes"))
app.use('/users',require("./Routes/user"))
app.use('/carros',require("./Routes/carros"))

app.listen(3001,function(){
    console.log("Server Running")
});

app.post('/test', function(req, res) {
    console.log(req.body); // the posted data
    return req.body;
});