const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('working');
});
app.listen(3000, () => {
    console.log('Servidor ejecutandose.')
});