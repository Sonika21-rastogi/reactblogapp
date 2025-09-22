require("dotenv").config({ path: __dirname + "/.env" });
const connectToMongo = require("./db");
var cors = require('cors');


connectToMongo();

const express = require('express');
const app = express();
app.use(cors())
app.use(express.json());

const port = process.env.PORT || 5000;

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
