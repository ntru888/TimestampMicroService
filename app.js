var express = require("express"),
bodyParser = require("body-parser"),
moment = require("moment")

var app = express();

app.get("/:date", function(req, res){
   //res.send(Math.floor(Date.parse("March 19, 2012")/1000)); 
   var returnDate = String(Date.parse(req.params.date));
   if (moment(req.params.date, "MMMM DD, YYYY", true).isValid()) {
       var returnDate = String(Date.parse(req.params.date));
       res.send(JSON.stringify({ natural: req.params.date, unix: returnDate }))
   }
   else if (!moment(req.params.date, "MMMM DD, YYYY", true).isValid()) {
    var returnDate = new Date(Number(req.params.date));
    var formattedDate = moment(returnDate).format('MMMM DD, YYYY');
    res.send(JSON.stringify({ natural: formattedDate, unix: Number(req.params.date) }))
   }
});

app.listen(process.env.PORT, process.env.IP)