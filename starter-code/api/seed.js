var mongoose = require('mongoose');
var Criminal = require('./models/Criminal');

mongoose.connect('mongodb://localhost:27017/infamous-masterminds');

var criminalsArray = [
	{
		name: "Al Capone",
	  location: "Miami, FL, USA",
		status: "dead"		
	},
	{
		name: "John Wilkes Booth",
	  location: "Port Royal, VA, USA",
		status: "dead"		
	},	
	{
		name: "Professor Moriarty",
	  location: "Reichenbach Falls, CH",
		status: "unknown"		
	},
	{
		name: "Eddard Stark",
		location: "Winterfell",
		status: "alive"
	}
];

Criminal.remove({}, function(err, response) {
	if(err) console.log(err);
	Criminal.create(criminalsArray, function(err, criminals) {
		if (err) console.log(err);
		console.log("Created " + criminals.length + " criminals successfully");
		process.exit();
	});
});
