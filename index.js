const connectToMongo = require('./db');
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json());

const port = process.env.PORT || 5000;

// First connect to MongoDB, then start the server
connectToMongo().then(() => {
    app.use('/api/auth', require('./routes/auth'));
    app.use('/api/notes', require('./routes/notes'));

    app.get('/', (req, res) => {
        res.send("Hello World");
    });

    app.listen(port, () => {
        console.log(`🚀 Server is running on http://localhost:${port}`);
    });
});
