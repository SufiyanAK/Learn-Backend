import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Server')
})

app.get('/api/framwork', (req, res) => {
    const choices = [
        { id: 1, name: "React", category: "Frontend Framework" },
        { id: 2, name: "Node.js", category: "Backend Framework" },
        { id: 3, name: "MongoDB", category: "Database" },
        { id: 4, name: "Express", category: "Backend Framework" },
        { id: 5, name: "TypeScript", category: "Programming Language" }
    ];
    res.send(choices)
})

app.listen(3010, () => {
    console.log(`app is listening to Port: http://localhost:3010`);
})