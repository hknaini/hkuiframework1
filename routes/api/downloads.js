const express= require('express');
const router = express.Router();
const fs = require('fs');
const archiver = require('archiver');

router.get('/' , (req, res)=>{
   // res.send("hola");
   res.setHeader('Content-disposition', 'attachment; filename=theDocument.json');
   res.setHeader('Content-type', '*/*');
   res.charset = 'UTF-8';
   var dataJson = {
    "name": "mern",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
      "client-install": "npm install --prefix client ",
      "start": "node server.js",
      "server": "nodemon server.js",
      "client": "npm start --prefix client",
      "dev": "concurrently \"npm run server\" \"npm run client\" "
    },
    "author": "Himanshu",
    "license": "MIT",
    "dependencies": {
      "bcryptjs": "^2.4.3",
      "body-parser": "^1.19.0",
      "concurrently": "^4.1.2",
      "config": "^3.2.2",
      "cors": "^2.8.5",
      "express": "^4.17.1",
      "jsonwebtoken": "^8.5.1",
      "mongoose": "^5.6.11"
    },
    "devDependencies": {
      "nodemon": "^1.19.1"
    }
  }
  
   res.write(JSON.stringify(dataJson));
    res.download(__dirname, 'theDocument.json');
    res.send();

});

router.get('/zipdata2' ,(req, response)=>{
// Tell the browser that this is a zip file.
response.writeHead(200, {
  'Content-Type': 'application/zip',
  'Content-disposition': 'attachment; filename=myFile.zip'
});

var zip = archiver('zip');

// Send the file to the page output.
zip.pipe(response);

// Create zip with some files. Two dynamic, one static. Put #2 in a sub folder.
zip.append('Some text to go in file 1.', { name: '1.txt' })
  .append('Some text to go in file 2. I go in a folder!', { name: 'somefolder/2.txt' })
  .file('staticFiles/3.txt', { name: '3.txt' })
  .finalize();

});




router.get('/zipdata' ,(req, res)=>{
var output = fs.createWriteStream(__dirname + '/example.zip');
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

output.on('end', function() {
  console.log('Data has been drained');
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(res);

archive.append('string cheese!', { name: 'file2.txt' });
archive.append('string cheese22!', { name: 'file22.txt' });

var buffer3 = Buffer.from('buff it!');
archive.append(buffer3, { name: 'file3.txt' });

archive.finalize();



});

module.exports = router ;
