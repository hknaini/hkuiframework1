const express= require('express');
const router = express.Router();
const fs = require('fs');
const archiver = require('archiver');

router.get('/zipdata' ,(req, res)=>{
    console.log(req.query);
    const {table, f4ip, ip} = req.query; 
var archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

archive.pipe(res);
console.log('tale.type..' , typeof(table));
if(table == 'true'){
    console.log('talerrrrr...' , table);
var file1 = __dirname + '/table.js';
archive.append(fs.createReadStream(file1), { name: 'table.js' });
}

if(f4ip == 'true'){
    console.log('f4ipppp...' , table);
var file3 = __dirname + '/f4ip.js';
archive.append(fs.createReadStream(file3), { name: 'f4ip.js' });
}

if(ip == 'true'){
    console.log('ippppppppppp...' , table);
var file4 = __dirname + '/iponly.js';
archive.append(fs.createReadStream(file4), { name: 'iponly.js' });
}

var file2 = __dirname + '/pkg.json';
archive.append(fs.createReadStream(file2), { name: 'pkg.json' });
archive.finalize();
});

module.exports = router ;
