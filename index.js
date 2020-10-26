const express = require('express')

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.send("Hello word! Rodando Docker compose!");
});

app.listen(PORT, HOST, () =>{
    console.log("Ouvindo a porta 3000!")
})