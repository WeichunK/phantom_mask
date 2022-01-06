require('dotenv').config();
const express = require('express');
const app = express();
const { PORT, API_VERSION } = process.env;

app.use('/api/' + API_VERSION,
    [
        require('./server/routes/pharmacies_route'),
    ]
);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});