const express = require('express');
const bodyParser = require('body-parser');
const downloads = require('./routes/api/downloads');
const cors = require('cors');

const app = express();

const whitelist = ['http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(cors(corsOptions))

//Bodyparsee
app.use(bodyParser.json());


app.use('/api/downloads' , downloads);
const port = process.env.port || 5000 ;

app.listen(port);