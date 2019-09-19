const express= require('express');
const router = express.Router();
const fs = require('fs');
const archiver = require('archiver');

router.get('/rtable' , (req, res)=>{
   // res.send("hola");
   res.setHeader('Content-disposition', 'attachment; filename=theDocument.json');
   res.setHeader('Content-type', '*/*');
   res.charset = 'UTF-8';

   //Downloading the 
   var dataJson = {
    "name": "Put your app name here",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "hktestnpmone": "^1.0.0",
      "react": "^16.9.0",
      "react-dom": "^16.9.0",
      "react-scripts": "3.1.1"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": "react-app"
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
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
//var output = fs.createWriteStream(__dirname + '/example.zip');
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

/* output.on('close', function() {
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
 */
archive.pipe(res);
const pkgJson = {
    "name": "Put your app name here",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "hktestnpmone": "^1.0.0",
      "react": "^16.9.0",
      "react-dom": "^16.9.0",
      "react-scripts": "3.1.1"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": "react-app"
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }

//archive.append(JSON.stringify(pkgJson) , { name: 'package.json' });
// append a file from stream
var file1 = __dirname + '/table.js';
archive.append(fs.createReadStream(file1), { name: 'table.js' });

var file2 = __dirname + '/pkg.json';
archive.append(fs.createReadStream(file2), { name: 'pkg.json' });

/* var buffer3 = Buffer.from('buff it!');
archive.append(buffer3, { name: 'file3.txt' }); */

archive.finalize();



});

module.exports = router ;
