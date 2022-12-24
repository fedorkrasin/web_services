const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 8081;
const app = express();

app.use(bodyParser.json());

const drinksService = 'http://localhost:8082';

const bars = [
    {
        id: 1,
        town: 'Minsk',
        address: 'Ezhi Gedroyca 18',
        drinks: []
    },
    {
        id: 2,
        town: 'Baranovichi',
        address: 'Prityckogo 136',
        drinks: []
    },
    {
        id: 3,
        town: 'Minsk',
        address: 'Nezalezhnasci 4',
        drinks: []
    },
    {
        id: 4,
        town: 'New York',
        address: 'Wall Street 1',
        drinks: []
    },
];

app.get('/bars', (req, res) => {
    console.log('Returning bars list');
    res.send(bars);
});

app.post('/bars/:id/assignment', (req, res) => {
    request.post({
        headers: { 'content-type': 'application/json' },
        url: `${drinksService}/drink/${req.body.drinkId}`,
        body: `{
      }`
    }, (err) => {
        if (!err) {
            const barId = parseInt(req.params.id);
            const drinkId = parseInt(req.body.drinkId);
            const bar = bars.find(data => data.id === barId);
            bar.drinks.push(drinkId);
            res.status(202).send(bar);
        } else {
            res.status(400).send({ problem: `Drinks Service responded with issue ${err}` });
        }
    });
});

console.log(`Bar Service listening on port ${port}`);
app.listen(port);

