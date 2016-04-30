

module.exports = function(robot) {

	// ask the bot if we have class today
	robot.hear(/hello\?/i, function(response) {
		response.send('HELLO LIZ');
	})

	robot.hear(/cat/i, function(response) {
    function getRandomNumber(max, min) {
      return Math.floor(Math.random() * (max - min)) + min
    }
    var randomWidth = getRandomNumber(1000, 500);
    var randomHeight = getRandomNumber(500, 300);
    var imageUrl = 'http://placekitten.com/' + randomWidth + '/' + randomHeight;
		response.reply(imageUrl);
	}) 

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.reply('Call on ' + user.real_name + '!')
	})

}
