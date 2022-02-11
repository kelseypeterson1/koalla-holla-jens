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

pool.on('connect', () => {
    console.log('Postgres is connected!');
  })
  
pool.on('error', (err) => {
    console.log('Unexpected things!', err);
})

module.exports = pool;