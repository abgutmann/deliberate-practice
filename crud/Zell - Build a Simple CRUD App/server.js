console.log("May Node be with you");

const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();
// const connectionString = "mongodb+srv://testuser:XPmJsQOqH5aRfJ8V@cluster0.zgolxpx.mongodb.net/?retryWrites=true&w=majority";


// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true}));


// Connect to MongoDB Database
MongoClient.connect("mongodb+srv://testuser:XPmJsQOqH5aRfJ8V@cluster0.zgolxpx.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
  })
  .catch(error => console.error(error))

//Set Up PORT to be 3000 (localhost:3000)
app.listen(3000, function() {
    console.log("listening on 3000")
});

//We normally abbreviate "request" "req" and "response" to "res".
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// Handle POST request in /quotes
app.post("/quotes", (req, res) => {
    console.log("Helloooooooooooooooooo!");
    console.log(req.body);
});

