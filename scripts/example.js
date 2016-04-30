

module.exports = function(robot) {

	// simple "hello" response
	robot.hear(/hello/i, function(response) {
		response.send('HEY THERE');
	});

  // simple "hello" response
	robot.hear(/users/i, function(response) {
    var users = 'https://slack.com/api/users.list?token=xoxp-38185445795-38219843827-39192086817-3c4f792623';
		response.send(users);
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


	robot.respond(/is it friday yet\?/i, function(response) {
    var date = new Date(); //get today's date
    var daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var today = daysOfTheWeek[date.getDay()]; //get the day of the week

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

}
