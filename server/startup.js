// Set initial color to blue 

console.log(Colors.update({pos: 1},{ $set: { "name": "red" } } ));

if (Colors.find().count() === 0) {
	console.log("insert");
	var names = ["blue"];
	Colors.insert({name: names[0], pos: 1});
}