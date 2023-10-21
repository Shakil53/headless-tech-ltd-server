const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.port || 5000;

// midleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('headless tech ltd server is running')
})
app.listen(port, () => {
    console.log(`headless is running on port ${port}`)
})