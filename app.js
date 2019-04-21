import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import logger from './config/logger';

const app = express();

app.use(morgan('tiny', { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).json({
        Appname: 'Banka-lite',
    })
});

app.listen(port, () => logger.debug(`Application running on port ${port}`));

module.exports = app; 
