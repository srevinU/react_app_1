const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost:${PORT}`)
);

app.get('/test', (req, res) => {
    res.status(200).send({
        test: 'myFirstTest'
    })
});