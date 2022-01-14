require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { PORT, API_VERSION } = process.env;
app.use(cors());
app.use('/coverage', express.static('coverage'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to Phantom Mask APIs!')
})

app.use('/api/' + API_VERSION,
    [
        require('./server/routes/pharmacies_route'),
        require('./server/routes/masks_route'),
        require('./server/routes/transactions_route'),
        require('./server/routes/search_route'),
    ]
);

app.use(function (req, res, next) {
    res.status(404).send('Page not found');
});

app.use(function (err, req, res, next) {
    console.log(err);
    res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});

module.exports = app;