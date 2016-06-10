/*
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available.
*/

function condenseMeetingTimes(calJSON) {
	var compressedJSON = [];
	var startTimeArray = getStartTime(calJSON);
	var endTimeArray = getEndTime(calJSON);

	calJSON.forEach(function (obj) {
		var min = obj.startTime;
		var max = obj.endTime;
		if (startTimeArray.indexOf(min) > -1) {
			for (var i=min; i<=max; i++) {
				if (startTimeArray.indexOf(i) > -1) {
					var index = startTimeArray.indexOf(i)
					if (endTimeArray[index] > max) {
						max = endTimeArray[index];
					}
					startTimeArray.splice(index, 1);
					endTimeArray.splice(index, 1);
				}
			}
			compressedJSON.push({startTime: min, endTime: max});
		}
	});

	return compressedJSON;
}

function compressFurther(calJSON) {
	var startTimeArray = getStartTime(calJSON);
	var endTimeArray = getEndTime(calJSON);

	var sharedTimes = startTimeArray.filter(function (time) {
		return endTimeArray.indexOf(time) > -1;
	});

	sharedTimes.forEach(function (time) {
		var startIndex = startTimeArray.indexOf(time);
		var endIndex = endTimeArray.indexOf(time);
		var endValue = endTimeArray[startIndex];
		var startValue = startTimeArray[endIndex];

		calJSON.splice(startIndex, 1);
		startTimeArray.splice(startIndex, 1);
		calJSON.splice(endIndex-1, 1);
		endTimeArray.splice(endIndex-1, 1);

		calJSON.push({startTime: startValue, endTime: endValue});
	});

	return calJSON;
}

function getStartTime(calJSON) {
	var startTimeArray = [];

	calJSON.forEach(function (obj) {
		startTimeArray.push(obj.startTime);
	});

	return startTimeArray;
}

function getEndTime(calJSON) {
	var endTimeArray = [];

	calJSON.forEach(function (obj) {
		endTimeArray.push(obj.endTime);
	});
	
	return endTimeArray;
}

var calJSON = 
  [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
]

console.log(compressFurther(condenseMeetingTimes(calJSON)));
