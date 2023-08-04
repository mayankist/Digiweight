var express 		= require("express"),
	  app 				= express();

app.set("view engine", "ejs");

// ==========user=============
app.use(require("express-session")({
	secret: "my new test app",
	resave: false,
	saveUninitialized: false
}));

app.get("/", function(req, res){
  res.render("new");
});

app.listen(3000, function() {
  console.log("Server running on port 3000!");
});