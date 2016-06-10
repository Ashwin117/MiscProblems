/*
How do you check whether a string stands for a number or not? Numbers include positive and negative integers and floats.
For example, strings “+100.”, “5e2”, “-.123”, “3.1416”, and “-1E-16” stand for numbers,  but “12e”, “1a3.14”, “1.2.3”, “+-5”, and “12e+5.4” do not.
*/

function checkIfValidNumber (string) {
    var isNonNumericCharacter = containsNonNumericCharacter(string);
    var isRegularNumber = isNumber(string);
    var isProperEFormat = containsProperEFormat(string);
    var isProperSignFormat = containsProperSignFormat(string);
    
    return !isNonNumericCharacter && isRegularNumber && isProperEFormat && isProperSignFormat;
}

// Returns true if string contains non numeric characters
function containsNonNumericCharacter (string) {
    var isNonNumeric = false;
    
    for (var i=0; i<string.length; i++) {
        if (string[i].toLowerCase() !== 'e'&& isNaN(string[i]) && string[i] !== '.' &&
        string[i] !== '+' && string[i] !== '-') {
            isNonNumeric = true;
            break;
        }
    }
    
    return isNonNumeric;
}

// Returns true if string input is a decimal or regular number
function isNumber (string) {

    var decimalCounter = 0;
       
    for (var i=0; i<string.length; i++) {
        if (string[i] === '.') {
            decimalCounter++;
        }
    }
    
    if (decimalCounter < 2) {
        return true;
    } else {
        return false;
    }
}

function containsProperEFormat (string) { 
    var containsProperEFormat = true;
    if (string[string.length-1].toLowerCase() === 'e') {
        return false;
    }

    for (var i=0; i<string.length; i++) {
        if (string[i].toLowerCase() === 'e') {
            break;
        }
    }
    
    var afterE = string.substring(i+1, string.length);
    if (afterE && afterE.indexOf('.') > -1) {
        containsProperEFormat = false;
    }
    
    return containsProperEFormat
}

function containsProperSignFormat (string) {
    var containsSign = true;
    
    for (var i=0; i<string.length; i++) {
        if (i > 0 && (string[i] === '+' || string[i] === '-')) {
            if (string[i-1].toLowerCase() !== 'e' ) {
                containsSign = false;
            }
        }
    }
    
    return containsSign;
}

console.log(checkIfValidNumber('E10'));
