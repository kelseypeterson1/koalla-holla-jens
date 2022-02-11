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
    // songs.push(req.body);
    res.sendStatus(200);
    console.log('server sees new koala')
    // const newSong = req.body;
    // const queryText = `
    //   INSERT INTO "songs" ("artist", "track", "published", "rank")
    //   VALUES ($1, $2, $3, $4);
    // `;
    // // parameterized query, prevents SQL injection
    // pool.query(queryText, [newSong.artist, newSong.track, newSong.published, newSong.rank])
    //   .then((result) => {
    //       res.sendStatus(201);
    //   })
    //   .catch((err) => {
    //       console.log('Error querying', queryText, err);
    //       res.sendStatus(500);
    //   })
});

// PUT


// DELETE

module.exports = koalaRouter;