import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const corsOptions = {
    origin: 'http://localhost:5173', // Allow only requests from this origin
    methods: 'GET,POST,PUT,DELETE', // Allow only these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
};

const app = express();
app.use(cors(corsOptions));

// app.get('/', (req, res)=> {
//     req.send("Hello World");
// })

// Get a list of five jokes
app.get('/api/v1/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            text: "What did the cheese say when it looked in the mirror? Hello-melk!",
            content: "What did the cheese say when it looked in the mirror? Hello-melk!"
        },
        {
            id: 2,
            text: "I've got a bad feeling about this.",
            content: "I've got a bad feeling about this."
        },
        {
            id: 3,
            text: "I'm not a fan of cheese on my pizza.",
            content: "I'm not a fan of cheese on my pizza."
        },
        {
            id: 4,
            text: "I'm not a fan of cheese on my pizza.",
            content: "I'm not a fan of cheese on my pizza."
        },
        {
            id: 5,
            text: "I'm not a fan of cheese on my pizza.",
            content: "I'm not a fan of cheese on my pizza."
        }
    ]

    res.json(jokes);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})