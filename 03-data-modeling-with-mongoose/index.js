import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send(`Welcome To Server`);
})

app.listen(3010, () => {
    console.log(`App is running on port: http://localhost:${3010}`)
})