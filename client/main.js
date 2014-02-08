Template.backgroundcolor.bgcolor = function () {
	var bgc = Colors.findOne();
	console.log(bgc);
	if (bgc){
    $('body').css('background-color',bgc.name);
    return bgc.name;
	}
};