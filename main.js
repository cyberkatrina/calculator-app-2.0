// These variable hold the numbers we want to do operations on and the name of the operation we want to perform.
// They are expected to change so we use the "let" keyword.
let firstNum = null
let secondNum = null
let operation = null
let curNum = null
let lastPressed = null
let counter = 0

// this function takes in the number you type in the input field and saves it to the "firstNum" variable
const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
}

const changeInput = (num) => {
  if (curNum == null) {
    curNum = num
    if (num == ".") {
      console.log(num)
      curNum = 0 + num
    }
  }
  else {
  curNum += num
  }
  document.getElementById("input").innerText = curNum
  lastPressed = curNum
}

// this function takes in two argument/numbers and returns the sum of them
const add = (numA, numB) => {
  const sum = numA + numB
  console.log(sum)
  return sum
}

// this function takes in two argument/numbers and returns the difference of them
const subtract = (numA, numB) => {
  const difference = numA - numB
  return difference
}

// These variables are already defined but that don't point to functions. It's up to you to build the functions to complete your calculator use:
const multiply = (numA, numB) => {
  // * to get a product then return it
  // Open up the inspector tool in Chrome and select the Console tab to see what this functions is "logging out" to the console.
  const product = numA * numB
  return product
}

const divide = (numA, numB) => {
  // / to get a quotient
  const quotient = numA / numB
  return quotient
}

const modulus = (numA, numB) => {
  // and % to get a remainder.
  const modulo = numA % numB
  return modulo
}

// This function changes the "operation" variable to be equal to the "id" of the button we choose on the web page.
const changeOperation = (chosenOperation) => {
  counter ++
  if (lastPressed == "operation" || counter > 1) {
    alert("Press equals first")
    return
  }
  if (typeof curNum == "string") {
    if (curNum.includes(".")) {
      firstNum = parseFloat(curNum)
      curNum = null
    }
    else {
      firstNum = parseInt(curNum)
      curNum = null
    }
  }
  else {
    firstNum = curNum
    curNum = null
  }
  operation = chosenOperation
  // Use your Chrome Inspector Tool > Console Tab to see the "operation" that's logged
  console.log(operation)
  lastPressed = "operation"
}

// In order to show the user their results we have to access the DOM and stick in the value
const putResultInElement = (operationResults) => {
  // access the DOM by writing "document" then use the method "getElementById" and pass it the id, "result".
  document.getElementById("input").innerText = operationResults
  curNum = operationResults
  // Remember, each element has built in properties like "innerHTML" which we can change to anything we like. 
  // Here we give it a string: "Results: " and add the value of the operation to it.
}

// The function uses the value of "operation" variable to determine which operation function it should use on the number: add, subtract, multiply, divide, or modulus
const equals = () => {
  console.log(curNum)
  if (curNum.includes(".")) {
    secondNum = parseFloat(curNum)
  }
  else {
    secondNum = parseInt(curNum)
  }
  console.log(firstNum, secondNum, operation)
  switch (operation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
    case "subtraction": putResultInElement(subtract(firstNum, secondNum)) 
    break;
    case "multiplication": putResultInElement(multiply(firstNum, secondNum))
    break;
    case "division": putResultInElement(divide(firstNum, secondNum)) 
    break;
    case "modulus": putResultInElement(modulus(firstNum, secondNum)) 
    break;
    default: "Choose an operation"
  }
  counter = 0;
}

const clearPress = () => {
  document.getElementById("input").innerText = ""
  firstNum = null
  secondNum = null
  curNum = null
}