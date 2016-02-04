var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	console.log(data);
	res.render('add', data);
	name = req.query.name;
	des = req.query.description;

	obj = 
	{
		'name': name,
		'description': des,
		'imageURL': 'http://lorempixel.com/400/400/people'
	}
	console.log(obj);

	data["friends"].push(obj);
 }