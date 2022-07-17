const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  // GET route code here for vegetables table
  const queryString = `SELECT * FROM vegetables ORDER BY "id" ASC`;
  pool
    .query( queryString )
    .then( ( result ) =>{
      res.send( result.rows);
    })
    .catch( ( err ) => {
      console.log( "ERROR: Get all vegetables", err );
      res.sendStatus( 500 );
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
