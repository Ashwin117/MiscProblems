// This is the text editor interface. 
// Anything you type or change here will be seen by the other person in real time.

// input: [0, -1, 29, 3, 8, 17, 2]
// window 3:
// output: [0, -1, -1, -1, 3, 3, 2]

function findMinInWindow (input, windowSize) {
    if (!input || windowSize < 1) {
        return;
    }
    var counter = 0;

    var min = [];
    while (counter < input.length) {
        num = input[counter]; //0
        if (list.length < windowSize) {
            list.push(num); // 0, -1, 29
            console.log(findMin(list)); //0, -1, -1
        }
        else {
            list.shift();  // [29, 3] 
            list.push(num);  // [29, 3, 8]
            console.log(findMin(list));
        }
        counter = counter + 1;
    }
}

function findMin (list) {
    var min = Number.MAX_SAFE_INTEGER;
    
    list.forEach(function (num) {
       min = Math.min(min, num); 
    });
    
    return min;
}



findMinInWindow ([0, -1, 29, 3, 8, 17, 2], 3);
