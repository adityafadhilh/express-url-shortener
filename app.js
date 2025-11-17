require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

const urlRoutes = require('./routes/url.routes');

app.use(express.json());
app.use('/url', urlRoutes);

app.listen(port, () => {
    console.log('Server has been started at port ' + port);
});