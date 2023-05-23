const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;
const destination = require('./data.json');

app.get('/', (req, res) => {
    res.send('visit bangladesh adventures');
});

app.get('/destination', (req, res) => {
    res.send(destination);
});

app.get('/destination/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const placeId = destination.find(place => parseInt(place.id) === id);
    res.send(placeId);
})

app.listen(port, () => {
    console.log(`listening at port: ${port}`);
});