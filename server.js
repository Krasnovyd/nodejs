var log = require("logger")(module);
var User = require("./user");

var db = require("db");
db.connect();

function run(){
	var vasya = new User("Vasya");
	var petya = new User("Petya");

	vasya.hello(petya);
	log(db.getPhrases("Run successful"));
}

if (module.parent){
	exports.run = run;
} else {
	run();
}