'use strict';

function evalExpression (expression) {
  var stack = [];
  var index = 0;

  while (index < expression.length) {
    if (expression[index] === ')') {
      var subExp = constructInnerExpression();
      stack.push(multiplyThenAddValues(subExp));
    } else {
      stack.push(expression[index]);
    }
    index++;
  }

  if (stack.length === 1) {
    console.log(stack[0]);
    return stack[0];
  }

  if (stack.length > 0) {
    console.log(stack);
    var returnVal = multiplyThenAddValues(stack);
    console.log(returnVal);
  }

  function constructInnerExpression() {
    var subExp = [];
    while (true) {
      var val = stack.pop();
      if (val === '(') {
        break;
      } 
      subExp.push(val);
    }

    return subExp;
  }

  function multiplyThenAddValues(subExp) {
    var index = 0;
    while (index < subExp.length) {
      if (subExp[index] === '*') {
        var prod = parseInt(subExp[index-1]) * parseInt(subExp[index+1]);
        subExp.splice(index-1, 3, prod);
      }
      index++;
    }

    index = 0;
    var sum = 0;
    while (index < subExp.length) {
      if (!isNaN(subExp[index])) {
        sum = sum + parseInt(subExp[index]);
      }
      index++
    }

    return sum;
  }

}

evalExpression( [ "3",  "+", "5"]);



