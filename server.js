var express = require("express");
var app = express();
var bodyParser = require("body-parser");

const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// configure CORS
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Content-Type, X-Requested-With, Origin"
	);
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, PATCH, DELETE, OPTIONS"
	);
	next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./controllers/quizzes-controller")(app);

require("./controllers/question-controller")(app);

require("./controllers/quiz-attempts-controller")(app);

app.listen(3001);
