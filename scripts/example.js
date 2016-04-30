module.exports = function(robot) {

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/hello/i, function(response) {
		response.send("HELLO LIZ")
	})

	robot.hear(/i like (.+)/i, function(response) {
		var like = response.match[1]
		// response.reply() will have the robot at-mention you when it responds
		response.reply('I actually hate ' + like)
	})

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo')
		response.reply('Call on ' + user.real_name + '!')
	})

}
