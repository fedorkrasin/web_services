const express = require('express');
const bodyParser = require('body-parser');
const port = 8082;
const app = express();

app.use(bodyParser.json());

const drinks = [
    {
        id: 1,
        name: 'Kalyadny Cud',
        price: 1.99,
        volume: 0.45,
        manufacture: 'Alivariya'
    },
    {
        id: 2,
        name: 'Friends',
        price: 6,
        volume: 0.05,
        manufacture: 'Crystal'
    },
    {
        id: 3,
        name: 'Pilnser',
        price: 2.19,
        volume: 0.5,
        manufacture: 'Lidskoe'
    },
    {
        id: 4,
        name: 'Xmelnov',
        price: 2.99,
        volume: 2,
        manufacture: 'Xmelnov'
    }
];

app.get('/drink', (req, res) => {
    console.log('Returning drinks list');
    res.send(drinks);
});

console.log(`Drinks Service listening on port ${port}`);
app.listen(port);

