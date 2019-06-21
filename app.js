import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import logger from './config/logger';

const app = express();
const port = process.env.PORT || 8000;
const swaggerDocument = YAML.load('./swagger.yaml');

app.use(morgan('tiny', { stream: logger.stream }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get('/', (req, res) => {
    res.status(200).json({
        Appname: 'Banka-lite',
    })
});

app.listen(port, () => logger.debug(`Application running on port ${port}`));

export default app;
