var sampleInput = [100, 43, 23, 54, -23];

function mergeSort(sampleInput) {
	if (sampleInput.length === 1) {
  	return sampleInput;
  } else {
    
    var leftHalf = mergeSort(sampleInput.slice(0, sampleInput.length/2));
    var rightHalf = mergeSort(sampleInput.slice(sampleInput.length/2, sampleInput.length));
      
    var newArray = [];
    var lCounter = 0, rCounter = 0;
    while(lCounter < leftHalf.length || rCounter < rightHalf.length) { 
    		if (lCounter === leftHalf.length) {
    			newArray = newArray.concat(rightHalf.slice(rCounter, rightHalf.length));
    			break;
    		}
    		if (rCounter === rightHalf.length) {
    			newArray = newArray.concat(leftHalf.slice(lCounter, leftHalf.leftHalf));
    			break;
    		}
			if (leftHalf[lCounter] < rightHalf[rCounter]) {
		      	newArray.push(leftHalf[lCounter]);
		        if (lCounter < (leftHalf.length)) {
			        lCounter++;
			    }
			}   
			if (leftHalf[lCounter] > rightHalf[rCounter]){
		  	    	newArray.push(rightHalf[rCounter]);
		        	if ((rCounter) < (rightHalf.length)) {
			        	rCounter++;
			    	}
		      	}
		    }
    }
    return newArray;
}

console.log(mergeSort(sampleInput));