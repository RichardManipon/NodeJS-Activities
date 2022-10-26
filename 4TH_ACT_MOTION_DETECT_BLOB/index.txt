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
app.post("/api/camera/insert", (req, res) => {
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

// api to insert row using POST method
// return JSON
app.get("/api/camera/index", (req, res) => {
  // create query to db
  connection.execute("SELECT * FROM `detected`", (err, results, fields) => {
    if (err) throw err;
    res.send(
      results.forEach((element) => {
        element;
      })
    );
    console.log(
      results.forEach((element) => {
        element;
      })
    );
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
