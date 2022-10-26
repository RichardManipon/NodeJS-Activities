const express = require("express");

const app = express();
const port = process.env.port || 3000;
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "camera_db",
});

app.use(express.json({ limit: "8mb" }));
app.use(express.urlencoded({ limit: "8mb", extended: false }));

// api to insert row using POST method
// return JSON
app.post("/api/motion/insert", (req, res) => {
  // create query to db
  connection.execute(
    "INSERT INTO `detected_with_blob` (start_time, end_time, image) VALUES (?, ?, ?)",
    [req.body.start_time, req.body.end_time, req.body.image],
    (err, results, fields) => {
      if (err) throw err;
      res.json({
        message: `recorded new motion.`,
        inserted_at_id: results.insertId,
      });
      console.log(
        JSON.stringify({
          message: `recorded new motion.`,
          inserted_at_id: results.insertId,
        })
      );
    }
  );
});

// api to fetch all BLOB data from db
// return JSON
app.get("/api/motion", (req, res) => {
  // create query to db
  connection.execute(
    "SELECT * FROM `detected_with_blob`",
    (err, results, fields) => {
      if (err) throw err;
      res.json(results);
      console.log(results);
    }
  );
});

// api to show single row
// example: localhost:3000/api/users/2
// return JSON
app.get("/api/motion/:id", (req, res) => {
  let id = req.params.id;
  // create query to db
  connection.execute(
    "SELECT * FROM `detected_with_blob` WHERE id = ?",
    [id],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server

      if (err) throw err;

      if (results.length > 0) {
        res.json(results);
      } else {
        res
          .status(400)
          .json({ message: `user with an id of ${id} is not found.` });
      }

      console.log(results);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
