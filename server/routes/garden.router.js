const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
  // GET route code here for vegetables table
  const queryString = `SELECT * FROM "user" JOIN garden ON "user".id= garden.user_id JOIN vegetables ON garden.veggie_id = vegetables.id WHERE garden.user_id = $1`;
  const value = [req.user.id];
  pool
    .query( queryString, value )
    .then( ( result ) =>{
      res.send( result.rows);
    })
    .catch( ( err ) => {
      console.log( "ERROR: Getting user garden", err );
      res.sendStatus( 500 );
    });
});

/**
 * POST route template
 */
// router.post('/', (req, res) => {
//   const queryString= `INSERT INTO garden ( veggie_id , user_id ) VALUES( $1, $2);`
//   values = [ req.body.veggie_id, req.body.user_id ]
//   pool.query (queryString.values).then ((results)=>{
//     res.sendStatus (200); 
//   }).catch((err)=>{
//     console.log (err);
//     res.sendStatus(500);
//   });
// });

/**
 * DELETE
 */
router.delete ('/:id', (req,res)=>{
  const queryString = 'DELETE FROM inventory WHERE id=$1';
  values = [req.params.id];
  pool.query(queryString.value).then((results)=>{
    res.sendStatus(200); 
  }).catch ((err)=>{
    console.log(err);
   res.sendStatus(500); 
  });
});
module.exports = router;
