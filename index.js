var express = require('express');
var fs = require("fs")
var app = express();
var path = require("path")
const csv = require("csvtojson");
const converter = require('json-2-csv');



app.get('/',  (req, res)  => {
    purachseCSV()
   res.sendFile(path.join(__dirname, "/html/index.html"));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})



const purachseCSV = () =>{

    let vendors = new Set();
    let billNumbers = new Set();

csv()
.fromFile("bill.csv")
.then((result)=>{

   let bills= result.map((r)=>{



        return {
            'Bill_Date' : r["Bill Date"],
            "Bill_Number" : r["Bill Number"],
            "Vendor" :  r["Vendor Name"],
            "GSTIN" : r["GST Identification Number (GSTIN)"],
            "Item Total" : parseFloat(r["Item Total"]),


            "CGST 6" : parseFloat(r["CGST Rate %"]) === 6 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 6" : parseFloat(r["SGST Rate %"]) === 6 ? parseFloat(r["SGST(FCY)"]) : 0,


            "CGST 6" : parseFloat(r["CGST Rate %"]) === 6 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 6" : parseFloat(r["SGST Rate %"]) === 6 ? parseFloat(r["SGST(FCY)"]) : 0,

            "CGST 9" : parseFloat(r["CGST Rate %"]) === 9 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 9" : parseFloat(r["SGST Rate %"]) === 9 ? parseFloat(r["SGST(FCY)"]) : 0,


            "CGST 14" : parseFloat(r["CGST Rate %"]) === 14 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 14" : parseFloat(r["SGST Rate %"]) === 14 ? parseFloat(r["SGST(FCY)"]) : 0,


            "IGST 5" : parseFloat(r["IGST Rate %"]) === 5 ? parseFloat(r["IGST(FCY)"]) : 0,
            "IGST 12" : parseFloat(r["IGST Rate %"]) === 12 ? parseFloat(r["IGST(FCY)"]) : 0,
            "IGST 18" : parseFloat(r["IGST Rate %"]) === 18 ? parseFloat(r["IGST(FCY)"]) : 0,
            "IGST 28" : parseFloat(r["IGST Rate %"]) === 28 ? parseFloat(r["IGST(FCY)"]) : 0,
        }
    })
    converter.json2csv(bills, (err, curCSV)=>{
        fs.writeFile("output.csv", curCSV, "utf8", (err)=>{
            if(err){
                console.log(err);
            }
        })

    })
})
}
