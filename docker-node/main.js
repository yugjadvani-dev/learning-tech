const express = require('express');
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello World!',
    })
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})