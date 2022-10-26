const express = require("express");
const app = express();
const port = process.env.port || 3000;
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sql_node",
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// show activity instruction
// return HTML
app.get("/", (req, res) => {
  res.send(`
  <h1>Team Activity 1 (NodeJS Backend)</h1> 
  <p>1. Create a Backend API/endpoint using NodeJS that accepts and store (insert) the following in the database:</p> 
  <ul>
    <li>firstName</li>
    <li>lastName</li>
    <li>phone</li>
    <li>address1</li>
    <li>address2</li>
    <li>email</li>
  </ul>
  <p>2. Create a Backend API/endpoint that can update the following fields:</p> 
  <ul>
    <li>firstName</li>
    <li>lastName</li>
    <li>phone</li>
    <li>address1</li>
    <li>address2</li>
    <li>email</li>
  </ul>
  <p>3. Create a Backend API/endpoint that can delete a data using an ID.</p> 
  <p>Use the the following modules:</p> 
  <ul>
    <li>express</li>
    <li>mysql2</li>
  </ul>
  <p>Present this on our meeting and expect Q&A for each member.</p>
  `);
});

// api to show all rows
// return JSON
app.get("/api/users", (req, res) => {
  // create query to db
  connection.execute("SELECT * FROM `test`", function (err, results, fields) {
    console.log(results); // results contains rows returned by server

    if (err) throw err;
    console.log(results);
    res.json(results);
  });
});

// api to show single row
// example: localhost:3000/api/users/2
// return JSON
app.get("/api/users/:id", (req, res) => {
  let id = req.params.id;
  // create query to db
  connection.execute(
    "SELECT * FROM `test` WHERE id = ?",
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

// api to insert row using POST method
// return JSON
app.post("/api/insert", (req, res) => {
  // create query to db
  connection.execute(
    "INSERT INTO `test` (firstName, lastName, phone, address1, address2, email) VALUES (?,?,?,?,?,?)",
    [
      req.body.fname,
      req.body.lname,
      req.body.phone,
      req.body.address1,
      req.body.address2,
      req.body.email,
    ],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server

      if (err) throw err;
      res.json({ message: `successfully inserted new user.` });
    }
  );
});

// api to delete single row
// example: localhost:3000/api/delete/2
// return JSON
app.delete("/api/delete/:id", (req, res) => {
  let id = req.params.id;
  // create query to db
  connection.execute(
    "DELETE FROM `test` WHERE id = ?",
    [id],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server

      if (err) throw err;
      if (results.affectedRows > 0) {
        res.json({ message: `successfully deleted user with an id of ${id}` });
      } else {
        res
          .status(400)
          .json({ message: `user with an id of ${id} is not found.` });
      }
    }
  );
});

// api to update a row using PUT method
// example: localhost:3000/api/update/2?fname=test&lname=test&phone=test&address1=test&address2=test&email=test
// return JSON
app.put("/api/update", (req, res) => {
  let id = req.body.id;
  // create query to db
  connection.execute(
    "UPDATE `test` SET firstName = ?, lastName = ?, phone = ?, address1 = ?, address2 = ?, email = ? WHERE id = ?",
    [
      req.body.fname,
      req.body.lname,
      req.body.phone,
      req.body.address1,
      req.body.address2,
      req.body.email,
      id,
    ],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server

      if (err) throw err;
      if (results.affectedRows > 0) {
        res.json({
          message: `successfully updated user with an id of ${id}.`,
        });
      } else {
        res
          .status(400)
          .json({ message: `user with an id of ${id} is not found.` });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
