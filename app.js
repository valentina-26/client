const express = require('express');
const indexRouter = require('./server/views/index'); 
const desencriptar = require('./server/controller/encriptorController')
const { join } = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'client/dist')));


app.use("/", indexRouter);
//app.use("/home",desencriptar)


// Manejo de 404
app.use((req, res) => {
    res.status(404).json({ mensaje: "The endpoint you want to request is not available." });
});

// Servir archivos estáticos para Vue
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'client/dist/index.html'));
});

let config = {
    port: process.env.EXPRESS_PORT || 5000,
    host: process.env.EXPRESS_HOST_NAME || 'localhost'
};

app.listen(config, () => {
    console.log(`Server running at http://${config.host}:${config.port}`);
});

