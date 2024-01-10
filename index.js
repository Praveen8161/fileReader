const axios = require("axios");
const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "upload/" });

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// using DOM
app.post("/", upload.single("file"), async (req, res) => {
  try {
    console.log(req.file);
    res.download(req.file.path);
  } catch (err) {
    console.log(err);
  }
});

// using FORM Tag
app.post("/download-file", upload.single("file"), async (req, res) => {
  try {
    res.download(req.file.path);
  } catch (err) {
    console.log(err);
  }
});

app.listen("5000", () => {
  console.log(`http://localhost:5000`);
});
