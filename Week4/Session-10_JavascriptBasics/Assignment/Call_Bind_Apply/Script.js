class Calculator {
    add(num1, num2) {
      return num1 + num2;
    }
  
    subtract(num1, num2) {
      return num1 - num2;
    }
  
    multiply(num1, num2) {
      return num1 * num2;
    }
  
    divide(num1, num2) {
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "Error: Cannot divide by zero";
      }
    }
  }
  
  class ScientificCalculator extends Calculator {
    square(num) {
      return num ** 2;
    }
  
    cube(num) {
      return num ** 3;
    }
  
    power(num1, num2) {
      return num1 ** num2;
    }
  }
  
  // Create an instance of the ScientificCalculator class
  const scCalc = new ScientificCalculator();
  
  // Invoke the "add" method of the Calculator class with arguments 10 and 5 using "call" method
  const addResult = Calculator.prototype.add.call(scCalc, 10, 5);
  console.log("Addition Result:", addResult);
  
  // Invoke the "subtract" method of the Calculator class with arguments 10 and 5 using "apply" method
  const subtractResult = Calculator.prototype.subtract.apply(scCalc, [10, 5]);
  console.log("Subtraction Result:", subtractResult);
  
  // Create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result using "bind" method
  const multiplyByTwo = function (num) {
    return num * 2;
  };
  scCalc.multiplyByTwo = multiplyByTwo.bind(scCalc);
  
  // Create a new method named "powerOfThree" that raises a number to the power of 3 and returns the result using "bind" method
  const powerOfThree = function (num) {
    return num ** 3;
  };
  scCalc.powerOfThree = powerOfThree.bind(scCalc);
  
  // Invoke the "multiplyByTwo" method
  const multiplyByTwoResult = scCalc.multiplyByTwo(10);
  console.log("Multiply by Two Result:", multiplyByTwoResult);
  
  // Invoke the "powerOfThree" method
  const powerOfThreeResult = scCalc.powerOfThree(5);
  console.log("Power of Three Result:", powerOfThreeResult);
  