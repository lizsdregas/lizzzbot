module.exports = function(robot) {

	// simple response
	robot.hear(/beyonce/i, function(response) {

    var images = [
      'http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2010/4/26/0/FNM_060110-Centerfold-028_s4x3.jpg.rend.sniipadlarge.jpeg',
      'http://www.simplyrecipes.com/wp-content/uploads/2006/06/lemonade-640-dm.jpg',
      'http://cdn-image.realsimple.com/sites/default/files/styles/rs_main_image/public/image/images/1107/lemonade_300.jpg?itok=EW483h6w',
      'http://www.simplyum.com/wp-content/uploads/2013/06/refreshing-lemonade-1.jpg',
      'http://i0.wp.com/overtimecook.com/wp-content/uploads/2014/08/mango-lemonade3.jpg',
      'http://www.gannett-cdn.com/-mm-/a5f6f54a42bcc6f0b93aae82a587c569c389fa06/c=0-0-2127-2836&r=537&c=0-0-534-712/local/-/media/2015/07/02/Nashville/B9317940184Z.1_20150702140919_000_GGSB8FJ43.1-0.jpg',
      'http://f.tqn.com/y/cocktails/1/W/I/Y/-/-/Lemonade-129233147.jpg',
      'http://www.recipe.com/images/stevia-in-the-rawreg-lemonade-24600004rca-ss.jpg'
    ]

    var randomImage = images[math.floor(math.random * images.length)];
		response.send('randomImage');
	});

  // if the bot hears "cat" it will reply with a random, cute cat picture from placekitten
	robot.hear(/cat/i, function(response) {
    function getRandomNumber(max, min) {
      return Math.floor(Math.random() * (max - min)) + min
    }
    var randomWidth = getRandomNumber(1200, 500);
    var randomHeight = getRandomNumber(1000, 300);
    var imageUrl = 'http://placekitten.com/' + randomWidth + '/' + randomHeight;
		response.reply(imageUrl);
	});

  // if you ask the bot "is it friday yet?" it will respond based on the day of the week
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
