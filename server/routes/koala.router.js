// DB CONNECTION
const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');


// GET
koalaRouter.get('/', (req, res) => {
    // let queryText = 'SELECT * FROM "songs" ORDER BY "rank" DESC;';
    // pool.query(queryText)
    //   .then((result) => {
    //     res.send(result.rows);
    //   })
    //   .catch((err) => {
    //       console.log('Error making query', queryText, err);
    //       res.sendStatus(500);
    //   });
    console.log("connection to server successful")
});

// POST


// PUT


// DELETE

module.exports = koalaRouter;