const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here for vegetables table
  const queryString = `SELECT * FROM "user" JOIN garden ON "user".id= garden.user_id JOIN vegetables ON garden.veggie_id = vegetables.id WHERE garden.user_id = $1`;
  const value = [req.user.id];
  pool
    .query(queryString, value)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Getting user garden", err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  console.log("/garden POST", req.body);
  const queryString = `INSERT INTO garden ( veggie_id , user_id ) VALUES( $1, $2 );`;
  values = [req.body.id, req.user.id];
  pool
    .query(queryString, values)
    .then((results) => {
      console.log("results from POST", results);
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

/**
 * DELETE
 */
router.delete("/:id", (req, res) => {
  console.log(req.params.id);
  console.log("inside DELETE");
  const queryString = `DELETE FROM "garden" WHERE "veggie_id" = $1 AND "user_id" = $2;`;
  values = [req.params.id, req.user.id];
  console.log(req.body);
  console.log(req.body.id);
  pool
    .query(queryString, values)
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.put("/", (req, res) => {
  console.log(req.body);
  const queryString = `UPDATE "garden" SET notes = $1 WHERE "veggie_id" = $2 AND "user_id" = $3;`;
  values = [req.body.notes, req.body.veggie_id, req.user.id];
  pool
    .query(queryString, values)
    .then((results) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
module.exports = router;
