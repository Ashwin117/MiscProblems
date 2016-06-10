
function findRotationPoint(dictionaryWords) {
	var upBoundWord = dictionaryWords[0];
	var endBoundWord = dictionaryWords[dictionaryWords.length-1];
	var selectedWord;

	if (upBoundWord < endBoundWord) {
		return upBoundWord;
	}

	while (dictionaryWords.indexOf(upBoundWord) < dictionaryWords.indexOf(endBoundWord)) {
		var middleIndex = Math.ceil( dictionaryWords.indexOf(upBoundWord) + ((dictionaryWords.indexOf(endBoundWord) - dictionaryWords.indexOf(upBoundWord))/2) );
		selectedWord = dictionaryWords[middleIndex];

		if (selectedWord < dictionaryWords[middleIndex-1]) {
			break;
		}

		if (upBoundWord < selectedWord) {
			upBoundWord = selectedWord;
		} else {
			endBoundWord = selectedWord;
		}
	}
	
	return selectedWord || upBoundWord;
}

var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

console.log(findRotationPoint(words));



