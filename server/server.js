const express = require('express')
const cors = require("cors");
const EmailSender = require("./sendEmail.js");
const morgan = require('morgan')
const path = require('path');
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors());
app.use(morgan('dev'))
const port = process.env.PORT || 3001;

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// ****** SEND API
app.post("/send", async (req, res) => {
  try {

    const { name, email, message } = req.body

    EmailSender({name, email, message})

    res.status(200).send("Success");

  } catch (error) {

    console.log(error);
    
    res.status(404).send("Error ❌");
  }
});


app.listen(port, () => {
  console.log(`app is live on ${port}`)
})
