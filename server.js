var express    = require ("express");
var app        = express();
var morgan     = require("morgan");
var mongoose   = require("mongoose");
var bodyParser = require('body-parser');
var router     = express.Router();
var appRoutes  = require('./app/routes/api')(router)
var path       = require("path")

app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended :true }))
app.use(express.static(__dirname  + "/public"))
app.use("/api",appRoutes);


mongoose.connect('mongodb://localhost/test', (err)=>{
	if(err){
		console.log("not connected to database" + err)
	}else{
		console.log("connected to database")
	}
});

app.get("*",(req,res)=>{
	res.sendFile(path.join(__dirname  + "/public/app/index.html"))
})



var port = process.env.PORT || 3000
app.listen(port ,()=>{ console.log("Running the server on port " + port)})


