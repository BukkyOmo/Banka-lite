const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const logger = require('./config/logger');

const app = express();
app.use(morgan('dev', { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.get('/', (request, response) => {
    response.status(200).json({
        Appname: 'Banka-lite',
    })
});

app.listen(port, () => logger.debug(`Application running on port ${port}`));

module.exports = app; 
