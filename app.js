const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
app.get('/', (request, response) => {
    response.send('Hello World');
});

app.listen(port, () => console.log(`Application running on port ${port}`));