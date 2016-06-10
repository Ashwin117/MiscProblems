/*
You've built an in-flight entertainment system with on-demand movie streaming.
Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.
*/

function are2MoviesForFlightLength (flightLength, movieLengths) {
	if (!flightLength && !movieLengths) {
		return false;
	}
	var diffLengths = movieLengths.map(function (movieLength) {
		return (flightLength - movieLength);
	});

	for (var i=0; i<diffLengths.length; i++) {
		var index = movieLengths.indexOf(diffLengths[i]);
		if (index !== i && index > -1) {
			return true;
		}
	}
	return false;
}

are2MoviesForFlightLength(4, [2, 4, 1, 2]);

/// ANSWER ///

function canTwoMoviesFillFlight(movieLengths, flightLength) {
	// movie lengths we've seen so far
	var movieLengthsSeen = new Set();

	for (var i = 0; i < movieLengths.length; i++) {
	    var firstMovieLength = movieLengths[i];

	    var matchingSecondMovieLength = flightLength - firstMovieLength;
	    if (movieLengthsSeen.has(matchingSecondMovieLength)) {
	        return true;
	    }

	    movieLengthsSeen.add(firstMovieLength);
	}

	// we never found a match, so return false
	return false;
}