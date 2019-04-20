const express = require('express');
const port = process.env.PORT || 3000;

const app = express();
app.get('/', (request, response) => {
    response.status(200).json({
        username: 'Banka',
    })
});

app.listen(port, () => console.log(`Application running on port ${port}`));

module.exports = app; 
