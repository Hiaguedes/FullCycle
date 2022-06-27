const express = require('express')
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle Rocks!</h1>')
  })
  
  app.listen(PORT, () => {
    console.log(`Ouvindo na porta ${PORT}`)
  })
