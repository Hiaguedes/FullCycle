const express = require('express')
const app = express();
const PORT = 4000;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
  })
  
  app.listen(PORT, () => {
    console.log(`Running on http://${HOST}:${PORT}`)
  })
