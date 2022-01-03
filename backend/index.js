const express = require("express");
var cors = require("cors");

const dataService = require("./services/dataService");

const app = express();
app.use(cors());

const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to devcon server");
});

app.get("/country", (req, res) => {
  res.status(200).send({
    status: 0,
    message: "Success",
    data: [...dataService.countries],
  });
});

app.get("/metadata", (req, res) => {
  res.status(200).send({
    status: 0,
    message: "Success",
    data: { ...dataService.metadata },
  });
});

app.get("/metadata/config", (req, res) => {
  res.status(200).send({
    status: 0,
    message: "Success",
    data: { ...dataService.metadataConfig },
  });
});

app.listen(port, () => {
  console.log(`Devcon server is listening at http://localhost:${port}`);
});
