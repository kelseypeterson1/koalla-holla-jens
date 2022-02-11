// DB CONNECTION
const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');


// GET
koalaRouter.get('/', (req, res) => {
    let queryText = 'SELECT * FROM "koalas";';
    pool.query(queryText)
      .then((result) => {
        res.send(result.rows);
      })
      .catch((err) => {
          console.log('Error making query', queryText, err);
          res.sendStatus(500);
      });
    console.log("connection to server successful")
});

// POST
koalaRouter.post('/', (req, res) => {
    console.log('server sees new koala')
    const newKoala = req.body;
    const queryText = `
      INSERT INTO "koalas" ("name", "age", "gender", "transfer", "notes")
      VALUES ($1, $2, $3, $4, $5);
    `;
    pool.query(queryText, [newKoala.name, newKoala.age, newKoala.gender, newKoala.transfer, newKoala.notes])
      .then((result) => {
          res.sendStatus(201);
      })
      .catch((err) => {
          console.log('Error querying', queryText, err);
          res.sendStatus(500);
      })
});

// PUT


// DELETE

module.exports = koalaRouter;