const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculate(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          console.log("Error: Division by zero is not allowed.");
          process.exit(1);
        }
      default:
        console.log("Error: Invalid operator. Please use +, -, *, or /.");
        process.exit(1);
    }
  }
  
  readline.question('Enter the first number: ', (num1) => {
    readline.question('Enter the operator: ', (operator) => {
      readline.question('Enter the second number: ', (num2) => {
        const result = calculate(parseFloat(num1), operator, parseFloat(num2));
        console.log(`The result is: ${result}`);
        readline.close();
      });
    });
  });