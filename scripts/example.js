module.exports = function(robot) {

	// ask the bot if we have class today
	robot.hear(/hello\?/i, function(response) {
		response.send('HELLO LIZ');
	})

	robot.hear(/i like gifs/i, function(response) { 
		response.reply('/giphy')
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.reply('Call on ' + user.real_name + '!')
	})

}
