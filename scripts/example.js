module.exports = function(robot) {

	// simple response     
	robot.hear(/beyonce/i, function(response) {
		response.send('http://www.simplyrecipes.com/wp-content/uploads/2006/06/lemonade-640-dm.jpg');
	});

  // if the bot hears "cat" it will reply with a random, cute cat picture
	robot.hear(/cat/i, function(response) {
    function getRandomNumber(max, min) {
      return Math.floor(Math.random() * (max - min)) + min
    }
    var randomWidth = getRandomNumber(1200, 500);
    var randomHeight = getRandomNumber(1000, 300);
    var imageUrl = 'http://placekitten.com/' + randomWidth + '/' + randomHeight;
		response.reply(imageUrl);
	});

	robot.hear(/is it friday yet\?/i, function(response) {
    var date = new Date(); //get today's date
    var daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var today = daysOfTheWeek[date.getDay()]; //translate getDay to string of corresponding day from array

    if (today === 'Friday') {
        response.send("It's Friday! Let's party!");
    } else if (today === 'Thursday'){
        response.send("Tomorrow is Friday!")
    } else if ((today === 'Saturday') || (today === 'Sunday')){
        response.send("It's the weekend! Enjoy!")
    } else {
        response.send("It's not Friday yet, keep working!")
    }
	});

  //bot will answer when asked who built it
	robot.respond(/who programmed you\?/i, function(response) {
		var user = robot.brain.userForName('lizsdregas')
		response.reply(user.real_name + ' did!');
	});

}
