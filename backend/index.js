const express = require('express')
const bodyParser = require('body-parser');
const cors = require("cors");
var router = express.Router()
const app = express();



app.use(cors());
app.use(bodyParser.json());

var mysql = require('mysql2');




var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "anshika",
  database:"indane"
});



con.connect(function(err) {
    if (err){
      console.log("Not connected");
    }
    console.log("Connected!");
    
});


// ADD CLIENT
app.post('/addClient',(req, res) => {
  let mobile= req.body.id;
  let name=req.body.Name;

  let data= {mobile,name};
  let sql = "INSERT INTO CLIENT SET ?";
  let query = con.query(sql, data,(err, results) => {
    if(err){
      res.send(JSON.stringify({"status":100}));
      // res.send(JSON.stringify({"status": 204, "error": null, "response": results}));
      return
    }
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});





// Fetch Employee Details
app.post('/clientData',(req, res) => {
  let mobile=req.body.id;
  let query = con.query("SELECT * FROM CLIENT WHERE MOBILE = ?",[mobile], (err, results) => {
    if(err){
      res.send(JSON.stringify({"status":100}));
      return
    }
    console.log(results);
    res.send(JSON.stringify(results));
  });
});







// Add report
app.post('/book',(req, res) => {
  let entryid= req.body.id;
  let house=req.body.house;
  let city=req.body.city;
  let quantity=req.body.success;
  let others=req.body.others;
  let date_ob= new Date();
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let added=year+"-"+month+"-"+date;
 

  let data= {entryid,quantity,added,others,city,house};
  console.log(data);
  let sql = "INSERT INTO ENTRIES SET ?";
  let query = con.query(sql, data,(err, results) => {
    if(err){
      res.send(JSON.stringify({"status":100}));
      // res.send(JSON.stringify({"status": 204, "error": null, "response": results}));
      return
    }
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});


// View particular employee all report
app.post('/showParticularClient',(req, res) => {
  let entryid= req.body.id;
  let from = req.body.from;
  let to=req.body.to;
  let query = con.query("SELECT ADDED, QUANTITY, OTHERS AS ADDRESS,HOUSE, CITY FROM ENTRIES WHERE ADDED>= ? AND ADDED<=? AND ENTRYID= ?",[from,to,entryid], (err, results) => {
    
    if(err){
      res.send(JSON.stringify({"status":100}));
      // res.send(JSON.stringify({"status": 204, "error": null, "response": results}));
      return
    }
    res.send(JSON.stringify(results));
  });
}); 



// View All employee all report
app.post('/showAllClient',(req, res) => {
  let from = req.body.from;
  let to=req.body.to;
  let query = con.query("SELECT (SELECT NAME FROM CLIENT WHERE MOBILE = ENTRYID) AS NAME, ENTRYID, ADDED, QUANTITY, OTHERS AS ADDRESS, HOUSE, CITY FROM ENTRIES WHERE ADDED>= ? AND ADDED<= ?" ,[from,to], (err, results) => {

    if(err){
      res.send(JSON.stringify({"status":100}));
      // res.send(JSON.stringify({"status": 204, "error": null, "response": results}));
      return
    }
    console.log(results);
    res.send(JSON.stringify(results));
  });
}); 


const port = 5000;


app.get('/', (req, res) => {
    res.send('Hello World!')
})





app.listen(port, () => {
  console.log(`MTS app running on port ${port}`)
})