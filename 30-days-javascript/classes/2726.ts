class Calculator {
  result: number
  
  constructor(value: number) {
    this.result = value
  }

  add(value: number): Calculator {
    this.result += value
    return this
  }

  subtract(value: number): Calculator {
    this.result -= value
    return this
  }

  multiply(value: number): Calculator {
    this.result *= value
    return this
  }

  divide(value: number): Calculator {
    if (value === 0) throw new Error('Division by zero is not allowed')

    this.result /= value
    return this
  }

  power(value: number): Calculator {
    this.result = Math.pow(this.result, value)
    return this
  }

  getResult(): number {
    return this.result
  }
}

// Example 2:
// Input: 
// actions = ["Calculator", "multiply", "power", "getResult"], 
// values = [2, 5, 2]
// Output: 100
let myCalculator: Calculator = new Calculator(2)
console.log(myCalculator.multiply(5).power(2).getResult());

// Example 3:
// Input: 
// actions = ["Calculator", "divide", "getResult"], 
// values = [20, 0]
// Output: "Division by zero is not allowed"
// let myCalculator2: Calculator = new Calculator(20)
// myCalculator2.divide(0)
