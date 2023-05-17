const express = require("express");
const app = express();
const bodyparser= require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const { application } = require("express");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootuser",
    database: "registration_form"
})
const arr = [  ];
const name ='rohit';

db.connect(error=> {
    if(error) throw error;
    console.log("Successfully Connected to the database")
    db.query("select * from registration_form_content ",function(err,res){
if(err) throw err;
var count = 0;
if(res.length !=0){
  console.log("res: ",res)
  arr.push( res)
}
    for(let j=0;j<arr.length;j++){
        if(name == arr[j].firstname){
console.log("Existed!!");
break;
        }
        else{
            count++;
        }
    
}
if(res.length != 0){
    console.log("This Row is already exist !!");

}

// else{
//   db.query("INSERT INTO registration_form_content(firstname,lastname,email,address,country,state,zipcode,gender,password,confirm_password) VALUES('rohit','singh','rohit@gmail.com','indira nagr','india','Uttar Pradesh','304313','Male','rohit123','rohit1243')",function(err,result) {
//     if(err) throw err;
//     console.log("result",result);
//     // res.send("Hello Express")

//  }) 
// }
if(count != 0){
  db.query("INSERT INTO registration_form_content(firstname,lastname,email,address,country,state,zipcode,gender,password,confirm_password) VALUES('rohit','singh','rohit@gmail.com','indira nagr','india','Uttar Pradesh','304313','Male','rohit123','rohit1243')",function(err,result) {
        if(err) throw err;
        console.log("result",result);
        // res.send("Hello Express")    
     }) }
   
});
});

app.use(cors());
app.use(express.json());
// app.use(body-parser.urlencoded({extended: true}))
app.use("/",(req,res) => {  
    // const sqlInsert=
     
})
app.listen(5000,() => {
});