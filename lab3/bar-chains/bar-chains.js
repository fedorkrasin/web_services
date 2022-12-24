const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const port = 8080;
const app = express();

app.use(bodyParser.json());

const barsService = 'http://localhost:8081';

const barChains = [
    {
        id: 1,
        name: 'GARAGE',
        bars: []
    },
    {
        id: 2,
        name: 'Kim',
        bars: []
    },
    {
        id: 3,
        name: 'Pinta',
        bars: []
    },
];

app.get('/bar-chains', (req, res) => {
    console.log('Returning barChains list');
    res.send(barChains);
});

app.post('/bar-chains/:id/assignment', (req, res) => {
    request.post({
        headers: { 'content-type': 'application/json' },
        url: `${barsService}/bar/${req.body.barId}`,
        body: `{
          
      }`
    }, (err) => {
        if (!err) {
            const barChainId = parseInt(req.params.id);
            const barId = parseInt(req.body.barId);
            const barChain = barChains.find(data => data.id === barChainId);
            barChain.bars.push(barId);
            res.status(202).send(barChain);
        } else {
            res.status(400).send({ problem: `Bars service responded with issue ${err}` });
        }
    });
});

console.log(`Bar Chains service listening on port ${port}`);
app.listen(port);

