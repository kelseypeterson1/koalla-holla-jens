const express = require('express');
const koalaRouter = express.Router();
const pool = require('../modules/pool');

// DB CONNECTION
const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'koala_zone',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};
const pool = new Pool(config);

// GET


// POST


// PUT


// DELETE

module.exports = koalaRouter;