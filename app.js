require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;

const urlRoutes = require('./routes/url.routes');

app.use(cors())
app.use(express.json());
app.use('/url', urlRoutes);

app.listen(port, () => {
    console.log('Server has been started at port ' + port);
});