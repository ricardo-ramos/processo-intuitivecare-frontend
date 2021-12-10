const path = './tabela-teste.csv';
const csv = require('fast-csv');

const express = require("express");
const app = express();
const fs = require("fs");

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(8000, () => {
 console.log("Server running on port 8000");
});

app.get("/", (req, res, next) => {
  const data = []
  fs.createReadStream(path)
  .pipe(csv.parse({ headers: true }))
  .on('error', error => console.error(error))
  .on('data', row => {
    if(row.nome.includes(req.query.pesquisa) || row.id.includes(req.query.pesquisa)) {
      data.push(row)
    }
  })
  .on('end', () => res.json(data));
});