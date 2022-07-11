const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);

app.get('/test', (req, res) => {
    res.status(200).send({
        test: 'myFirstTest'
    })
});