const express = require('express')
const app = express();
const PORT = 4000;
const HOST = '0.0.0.0';

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Hiago')`
connection.query(sql)
connection.end()

app.get('/', (req, res) => {
    var queryString = 'SELECT name FROM people';

    connection.query(queryString, function(err, rows, fields) {
        if (err) throw err;
    
        for (var i in rows) {
            console.log('Post Titles: ', rows[i]);
        }
    });

    connection.end()

    res.send('<h1>Full Cycle Rocks!</h1>')
  })
  
  app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
  })
