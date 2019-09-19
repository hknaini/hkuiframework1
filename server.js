const express = require('express');
const bodyParser = require('body-parser');
const downloads = require('./routes/api/downloads');

const app = express();

//Bodyparsee
app.use(bodyParser.json());


app.use('/api/downloads' , downloads);
const port = process.env.port || 5000 ;

app.listen(port);