const express = require("express");
const path = require("path");
const fs = require("fs");

const { spawn } = require("child_process");
const app = express();
const fileUpload = require("express-fileupload");

const port = 3000;
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.get("/", (req, res) => {
  console.log(req);
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", ["checkscript.py", "node.js", "python"]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
});
app.post("/", (req, res) => {
  console.log(req);
  console.log("files", req.files);
  let imagepath;
  let imagename;
  if (req.files && req.files.image) {
    image = req.files.image;

    let filename = image.name.slice(0, image.name.indexOf(".") - 1);
    let fileExtension = image.name.slice(image.name.indexOf(".") + 1); //eg: .png
    invalid = '<>:"/|()?* ';

    for (char of invalid) {
      filename = filename.replace(char, "");
    }

    let imagefolder = filename + fileExtension;
    imagename = filename + "." + fileExtension;
    imagepath = __dirname + "/images/" + imagefolder + "/";

    try {
      fs.mkdir(imagepath, { recursive: true }, (err) => {
        if (err) console.log(err);
      });
    } catch (err) {
      return res.send(err);
    }

    image.mv(imagepath + imagename, (err) => {
      image;
      if (err) {
        return res.send(err);
      }
    });
  }
  var dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", ["pyscript.py", imagename, imagepath]);
  // collect data from script
  python.stdout.on("data", function (data) {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });
  // in close event we are sure that stream from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    return res.send(dataToSend);
  });
});

app.listen(port, () =>
  console.log(`Example app listening on port 
${port}!`)
);
