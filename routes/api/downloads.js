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
  console.log(req.query);
  const dirname = "testuif9";
  const homedir = os.homedir();
  console.log(homedir);
  // `homedir()` returns absolute path so we use `join` here
  //fs.mkdir(require('path').join(homedir,dirname ));

  process.chdir("C:\\Users\\himanshu.kandpal\\testuif9"); 
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
      var file1 = __dirname + "/temptable.js";
      archive.append(fs.createReadStream(file1), { name: "temptable.js" });
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

    fs.copyFileSync(homedir + "\\" + dirname + "\\temptable.js", homedir + "\\" + dirname + "\\src\\App.js"); 
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
  console.log(__dirname);
  var fs = require('fs')

  const rt1 = "import React, { Component } from 'react'"
  const rt2 = "import Hkreacttable from 'hktestnpmone'"

  const rt3 = "class App extends Component {"
  const rt4 = "render() {"
  const rt5 = "return ("
  const rt6="<Hkreacttable" 
  const stdID = 'Student ID'
  const dataText1 = 
          "tableColumns = {['"+stdID +"', 'NAME' , 'AGE' , 'EMAIL' ,'WORK', 'OLA']}"
  const dataText2 = "tableColumnTypes = {['txt','btn','ip','txt','ip','txts']}"
  const dataText3 = "tableData={"
  const dataText4 ="["
  const mainData =  "{ id: 1, name: 'Himanshu', age: 221, emailid: 'Himanshu@email.com' , work : 'WRK1' , ola: 'OLA1'},{ id: 2, name: 'Pavan', age: 129, emailid: 'Pavan@email.com' , work : 'WRK2' , ola: 'OLA2'},{ id: 3, name: 'Anshul', age: 126, emailid: 'Anshul@email.com', work : 'WRK3' , ola: 'OLA3' }"
  const dataText5 ="]"
  const dataText6 = "}"


  const rt7="/>"
  const rt8=");"
  const rt9="}"
  const rt10="}"

  const rt11="export default App"


  const finalData = rt1 + "\n" + rt2 + "\n" + rt3 + "\n" + rt4 + "\n" + rt5 + "\n" + rt6 + "\n" + dataText1 + "\n" +
   dataText2 + "\n" + dataText3 + "\n" + dataText4 + "\n" + mainData + "\n" + dataText5 + "\n" + dataText6 + "\n" +rt7 + "\n" + rt8 + "\n" + rt9 + "\n" + rt10 + "\n" + rt11 ;
  fs.appendFile(__dirname+'\\temptable.js', finalData , function (err) {
  if (err) {
    // append failed
    console.log(err)
  } else {
    // done
    console.log('Doneee')
  }
})

  res.send();
});

module.exports = router;
