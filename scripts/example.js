

module.exports = function(robot) {

	// ask the bot if we have class today
	robot.hear(/hello\?/i, function(response) {
		response.send('HELLO LIZ');
	})

	robot.hear(/cats/i, function(response) {
    var imageUrl = 'http://placekitten.com/200/300';

		response.reply(imageUrl); 
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.reply('Call on ' + user.real_name + '!')
	})

}
