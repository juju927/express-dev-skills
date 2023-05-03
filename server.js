require('dotenv').config();

const express = require("express");
const cors = require('cors')
const hardskills = require('./routers/hardskills')

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', hardskills)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})