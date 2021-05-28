// Importaciones - módulos que necesito
const express = require('express');
const fs = require('fs');

// Instancio mi Express App
const app = express();

// Añado el parser para que sepa interpretar x-www-form-urlencoded
// Parser: código que interpreta y entiende una cadena de caracteres
app.use(express.urlencoded({ extended: true }));

// Añadimos el parser para JSON
// De esta forma mi Express es capaz de entender un JSON
app.use(express.json());

// ENDPOINTS
app.post('/comanda/add', (req, res) => {
    console.log('Endpoint comanda/add');
    // Datos comanda entrante
    const comanda = req.body;
    const { camarero, productos } = comanda;

    // Leo comandas existentes
    fs.readFile('comandas.db', {encoding: 'utf-8'}, (err, data) => {
        if(err) throw new Error('Error al leer archivo');

        // Parseo el string que he leído de comandas.db para poder trabajar con él
        // como un objeto JS
        let listaComandas = JSON.parse(data);
        // Obtengo el número de comandas que hay actualmente
        const numComandas = Object.keys(listaComandas).length;

        // Estructuro mi nueva comanda:
        const newComanda = {
            id: [numComandas + 1],
            camarero: camarero,
            date: new Date(),
            productos: productos,
            completa: false
        };

        // Añado nueva comanda a lista de comandas y convierto todo en un string
        // para guardarlo en el archivo
        listaComandas = { ...listaComandas, [newComanda.id]: newComanda };
        listaComandas = JSON.stringify(listaComandas);

        // Escribo el contenido en el archivo
        fs.writeFile('comandas.db', listaComandas, {flag: 'w'}, (err) => {
            if(err) throw new Error('Error al escribir archivo'); 
        });

        // Envío respuesta al cliente indicándole que todo ha ido guay
        res.send(`¡Oído cocina!. La comanda se ha registrado con nº: ${numComandas + 1}`);
    });
});

app.get('/comanda/details/:id', (req, res) => {
    console.log('Endpoint comanda/details/:id');
    // Devolver comanda con ID :id
});

app.get('/comanda/list', (req, res) => {
    // recibir la nueva comanda y guardarla en vble
    // escribir la nueva comanda en el archivo .DB
    // enviar respuesta de que todo OK
    console.log('Endpoint comanda/list');
});


// Arranco mi servidor (trata de arrancarlo!)
app.listen(3000, () => {
    console.log('Servidor rulando');
});
