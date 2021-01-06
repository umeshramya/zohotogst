const csv = require("csvtojson");


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
            "CGST 2.5" : parseFloat(r["CGST Rate %"]) === 2.5 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 2.5" : parseFloat(r["SGST Rate %"]) === 2.5 ? parseFloat(r["SGST(FCY)"]) : 0,

            "CGST 6" : parseFloat(r["CGST Rate %"]) === 6 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 6" : parseFloat(r["SGST Rate %"]) === 6 ? parseFloat(r["SGST(FCY)"]) : 0,

            "CGST 9" : parseFloat(r["CGST Rate %"]) === 9 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 9" : parseFloat(r["SGST Rate %"]) === 9 ? parseFloat(r["SGST(FCY)"]) : 0,


            "CGST 14" : parseFloat(r["CGST Rate %"]) === 14 ? parseFloat(r["CGST(FCY)"]) : 0,
            "SGST 14" : parseFloat(r["SGST Rate %"]) === 14 ? parseFloat(r["SGST(FCY)"]) : 0,



            // "IGST 5"  : {},
            // "IGST 12"  : {},
            // "IGST 18"  : {},
            // "IGST 28"  : {},


        }
    })

    console.log(bills);
})