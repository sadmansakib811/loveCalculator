const express = require('express');
const https = require('node:https');
const bodyParser = require ('body-parser');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.use (express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname +'/index.html');

})
app.post('/', function(req,res){
  const fname1 = req.body.fname;
  const lname1 = req.body.lname;
  var randomNumber = Math.random();
var randomNumber = Math.floor((randomNumber*100)+1);
if (randomNumber>70){
    res.send (lname1+" loves "+fname1+" "+ randomNumber+" % "+ "You guyz are made for each other");
}

else{

    res.send (lname1+" loves "+fname1+" "+ randomNumber+" % ");
}
})

app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening on port ${port}`)
})
