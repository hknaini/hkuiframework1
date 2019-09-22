const express = require("express");
const router = express.Router();
const fs = require("fs");
const archiver = require("archiver");
const os = require("os");
const unzipper = require("unzipper");
const zlib = require("zlib");
var extract = require("extract-zip");
var cmd = require("node-command-line");
const Promise = require("bluebird");

router.get("/zipdata", (req, res) => { 
  const dirname = "testuif8";
  const homedir = os.homedir();
  console.log(homedir);
  // `homedir()` returns absolute path so we use `join` here
  //fs.mkdir(require('path').join(homedir,dirname ));

  process.chdir("C:\\Users\\kandp\\testuif8"); 
  console.log(__dirname);
  //cmd.run('npm install');
  //console.log('Executed your command :)');
   
  //Promise.coroutine(function*() {
  //  console.log("Installing React)");
   // yield cmd.run("create-react-app .");
   console.log("Installing React");
   cmd.run('create-react-app .');
   
   setTimeout(function() {
    console.log("Installed React");
    cmd.run('npm install hktestnpmone');
    setTimeout(function() {
      
    

    var output = fs.createWriteStream(
      homedir + "/" + dirname + "/rexample.zip"
    );
    console.log(req.query);
    const { table, f4ip, ip } = req.query;
    var archive = archiver("zip", {
      zlib: { level: 9 } // Sets the compression level.
    });

    archive.pipe(output);
    console.log("tale.type..", typeof table);
    if (table == "true") {
      console.log("talerrrrr...", table);
      var file1 = __dirname + "/table.js";
      archive.append(fs.createReadStream(file1), { name: "table.js" });
    }

    if (f4ip == "true") {
      console.log("f4ipppp...", table);
      var file3 = __dirname + "/f4ip.js";
      archive.append(fs.createReadStream(file3), { name: "f4ip.js" });
    }

    if (ip == "true") {
      console.log("ippppppppppp...", table);
      var file4 = __dirname + "/iponly.js";
      archive.append(fs.createReadStream(file4), { name: "iponly.js" });
    }

    //console.log(__dirname);
    var file2 = __dirname + "/pkg.json";
    archive.append(fs.createReadStream(file2), { name: "pkg.json" });
    archive.finalize();

     extract(
      homedir + "\\" + dirname + "\\rexample.zip",
      { dir: homedir + "\\" + dirname },
      function(err) {
        // extraction is complete. make sure to handle the err
        console.log(err);
      }
    ); 

    


    //fs.unlinkSync(homedir + '\\'+dirname+'\\rexample.zip')

   // cmd.run('npm install hktestnpmone');
    setTimeout(function() {
        cmd.run('npm run start');
        fs.renameSync(homedir + "\\" + dirname + "\\src\\App.js",
    homedir + "\\" + dirname + "\\src\\OldApp.js");

    fs.copyFileSync(homedir + "\\" + dirname + "\\table.js", homedir + "\\" + dirname + "\\src\\App.js"); 
    cmd.run('npm run start');
    res.send();
      }, 30000);
    
    }, 60000);
    
}, 300000); 
  });
//});

router.get("/zipdatanew", (req, res) => {
  const dirname = "testuif1";
  const homedir = os.homedir();
  console.log(homedir);
  // `homedir()` returns absolute path so we use `join` here
  fs.mkdir(require("path").join(homedir, dirname));

  var output = fs.createWriteStream(homedir + "/" + dirname + "/rexample.zip");
  console.log(req.query);
  const { table, f4ip, ip } = req.query;
  var archive = archiver("zip", {
    zlib: { level: 9 } // Sets the compression level.
  });

  archive.pipe(output);
  console.log("tale.type..", typeof table);
  if (table == "true") {
    console.log("talerrrrr...", table);
    var file1 = __dirname + "/table.js";
    archive.append(fs.createReadStream(file1), { name: "table.js" });
  }

  if (f4ip == "true") {
    console.log("f4ipppp...", table);
    var file3 = __dirname + "/f4ip.js";
    archive.append(fs.createReadStream(file3), { name: "f4ip.js" });
  }

  if (ip == "true") {
    console.log("ippppppppppp...", table);
    var file4 = __dirname + "/iponly.js";
    archive.append(fs.createReadStream(file4), { name: "iponly.js" });
  }

  //console.log(__dirname);
  var file2 = __dirname + "/pkg.json";
  archive.append(fs.createReadStream(file2), { name: "package.json" });
  archive.finalize();

  extract(
    homedir + "\\" + dirname + "\\rexample.zip",
    { dir: homedir + "\\" + dirname },
    function(err) {
      // extraction is complete. make sure to handle the err
      console.log(err);
    }
  );

  //fs.unlinkSync(homedir + '\\'+dirname+'\\rexample.zip')

  res.send();
});

module.exports = router;
