

module.exports = function(robot) {

	// simple "hello" response
	robot.hear(/hello\?/i, function(response) {
		response.send('HEY THERE');
	})

  // simple "hello" response
	robot.hear(/users\?/i, function(response) {
    var users = users.list();
		response.send(users); 
	})

  // if the bot hears "cat" it will reply with a random, cute cat picture
	robot.hear(/cat/i, function(response) {
    function getRandomNumber(max, min) {
      return Math.floor(Math.random() * (max - min)) + min
    }
    var randomWidth = getRandomNumber(1200, 500);
    var randomHeight = getRandomNumber(1000, 300);
    var imageUrl = 'http://placekitten.com/' + randomWidth + '/' + randomHeight;
		response.reply(imageUrl);
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.reply('Call on ' + user.real_name + '!')
	})

}
