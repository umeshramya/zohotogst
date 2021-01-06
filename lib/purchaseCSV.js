const csv = require("csvtojson");



export default  purachseCSV = () =>{

    let vendors = new Set();
    let billNumbers = new Set();

csv()
.fromFile("bill.csv")
.then((result)=>{

   let bills= result.map((r)=>{

       vendors.add(r["Vendor Name"]);
       billNumbers.add(r["Bill Number"]);

        return {
            'Bill_Date' : r["Bill Date"],
            "Bill_Number" : r["Bill Number"],
            "Vendor" :  r["Vendor Name"],
            "GSTIN" : r["GST Identification Number (GSTIN)"],
            "Item Total" : parseFloat(r["Item Total"]),
            "CGST 2.5" : parseFloat(r["CGST Rate %"]) === 2.5 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 2.5" : parseFloat(r["SGST Rate %"]) === 2.5 ? parseFloat(r["SGST(FCY)"]) : 0,

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

    return bills;
})
}

