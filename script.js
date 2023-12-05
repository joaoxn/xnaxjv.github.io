//Order Preference = Order of lines from 0 to infinity, 0 being the first line of the function, if, switch block
// and highest value the last line of the block. Lines with same value means the permutation won't matter.

let numbers = []
let operators = []

let empty = "&nbsp;"
let numbercounter = 0 //When 0, only numbers work as new inputs. When 1, operators can also be used.
// When 2, the last 2 numbers are concatenated at concatenateNumbers()
let isNegative = 1 //will multiply number input by isNegative value. Can switch between 1 and -1
let isDecimal = false //stops multiple dots and stops auto-numbering result at concatenateNumbers() (because of 1.00... cases)
let isNotation = false //stops multiple e's
let isTransitioning = false
let counter = 0
let lastNumberOfOperation
let lastOperatorOfOperation
let result
let displayProcess
let recordLastOperation
let element
let item1, item2, item3
let placesAfterDot = 15

function keyboardMouseRanged() {
    isMouseRangedValue = document.getElementById("isMouseRanged").value
    if (isMouseRangedValue == 'on') {

    }
}

function animateCSS(id) {
    if (!isTransitioning) {
        isTransitioning = true
        element = document.getElementById(id).style;
        item1 = element.transition
        item2 = element.backgroundColor
        item3 = element.transform
        element.transition = "100ms";
        element.backgroundColor = "rgb(100, 124, 134)";
        element.transform = "scale(1.075)";
        timeout = setTimeout(() => {
            element.transition = item1
            element.backgroundColor = item2
            element.transform = item3
            isTransitioning = false
        }, 200)
    }
}

function animateCSS_Reset(elem) {
    console.log('testing3')
    elem.transition = item1
    elem.backgroundColor = item2
    elem.transform = item3
    console.log('testing4')
    // elem.transition = "0.1s"
    // elem.backgroundColor = "rgb(171, 225, 250)"
    // elem.transform = "scale(1)"
}

function test() {
    counter++
    if (counter >= 100) {
        counter = 0
        alert("You found a secret!")
    }
}

document.addEventListener("keypress", function onEvent(event) { //Let user type with keyboard instead of only clicking buttons.
    if (document.getElementById('isMouseRanged') == 'on') {
        document.getElementById("calculator").addEventListener("mouseover", function () {
            keyCases(event.key)
        })
    } else {keyCases(event.key)}
    // switch (event.key) {
    //     case 'm': test(); break
    //     case '0': inputNumber(0); animateCSS("button_0")
    //         // element = document.getElementById("button_0").style;
    //         // element.transition = "0.2s";
    //         // element.backgroundColor = "rgb(100, 124, 134)";
    //         // element.transform = "scale(1.075)";
    //         // setTimeout(resetTypeTransform, 200, element)
    //         break
    //     case '1': inputNumber(1); animateCSS("button_1");
    //         break
    //     case '2': inputNumber(2); animateCSS("button_2");
    //         break
    //     case '3': inputNumber(3); animateCSS("button_3");
    //         break
    //     case '4': inputNumber(4); animateCSS("button_4");
    //         break
    //     case '5': inputNumber(5); animateCSS("button_5");
    //         break
    //     case '6': inputNumber(6); animateCSS("button_6");
    //         break
    //     case '7': inputNumber(7); animateCSS("button_7");
    //         break
    //     case '8': inputNumber(8); animateCSS("button_8");
    //         break
    //     case '9': inputNumber(9); animateCSS("button_9");
    //         break
    //     case '+': inputOperator('+'); animateCSS("button_plus");
    //         break
    //     case '-': inputOperator('-'); animateCSS("button_minus");
    //         break
    //     case 'x': inputOperator('×'); animateCSS("button_mult");
    //         break
    //     case '*': inputOperator('×'); animateCSS("button_mult");
    //         break
    //     case '×': inputOperator('×'); animateCSS("button_mult");
    //         break
    //     case '÷': inputOperator('÷'); animateCSS("button_divis");
    //         break
    //     case '/': inputOperator('÷'); animateCSS("button_divis");
    //         break
    //     case '.': inputSpecial('.'); animateCSS("button_dot");
    //         break
    //     case ',': inputSpecial('.'); animateCSS("button_dot");
    //         break
    //     case 'e': inputSpecial('e'); //animateCSS("button_1");
    //         break
    //     case '=': inputSpecial('='); animateCSS("button_equal");
    //         break
    //     case 'Enter': inputSpecial('='); animateCSS("button_equal");
    //         break

    // }
});
document.addEventListener("keydown", function onEvent(event) { //Allows the usage of keys without character value
    switch (event.key) {
        case 'Delete': inputSpecial('C'); animateCSS("button_C");
            break
        case 'Backspace': inputSpecial('C'); animateCSS("button_C");
            break
        case 'Escape': inputSpecial('C'); animateCSS("button_C");
            break
    }
})

function keyCases(a) {
    switch (a) {
        case 'm': test(); break
        case '0': inputNumber(0); animateCSS("button_0"); break
        case '1': inputNumber(1); animateCSS("button_1"); break
        case '2': inputNumber(2); animateCSS("button_2"); break
        case '3': inputNumber(3); animateCSS("button_3"); break
        case '4': inputNumber(4); animateCSS("button_4"); break
        case '5': inputNumber(5); animateCSS("button_5"); break
        case '6': inputNumber(6); animateCSS("button_6"); break
        case '7': inputNumber(7); animateCSS("button_7"); break
        case '8': inputNumber(8); animateCSS("button_8"); break
        case '9': inputNumber(9); animateCSS("button_9"); break
        case '+': inputOperator('+'); animateCSS("button_plus"); break
        case '-': inputOperator('-'); animateCSS("button_minus"); break
        case 'x': inputOperator('×'); animateCSS("button_mult"); break
        case '*': inputOperator('×'); animateCSS("button_mult"); break
        case '×': inputOperator('×'); animateCSS("button_mult"); break
        case '÷': inputOperator('÷'); animateCSS("button_divis"); break
        case '/': inputOperator('÷'); animateCSS("button_divis"); break
        case '.': inputSpecial('.'); animateCSS("button_dot"); break
        case ',': inputSpecial('.'); animateCSS("button_dot"); break
        case 'e': inputSpecial('e'); animateCSS("button_e"); break
        case '=': inputSpecial('='); animateCSS("button_equal"); break
        case 'Enter': inputSpecial('='); animateCSS("button_equal"); break
        case 'Delete': inputSpecial('C'); animateCSS("button_C"); break
        case 'Backspace': inputSpecial('C'); animateCSS("button_C"); break
        case 'Escape': inputSpecial('C'); animateCSS("button_C"); break
    }
}

function concatenateNumbers(a, b) {
    stringConcatenate = (a).toString() + (b).toString()
    if (
        isNotation === true &&
        Number(stringConcatenate) <= 1e308 && Number(stringConcatenate) >= -1e308
    ) {
        return stringConcatenate
    } else if (isDecimal === true && isNotation === false) {
        return stringConcatenate
    } else {
        return (10 * Math.abs(a) + Number(b)) * Math.sign(a) //concatenates absolute values (b can't be negative), then revert.
    }
}

function inputNumber(a) {
    clearLastOperationOfOperation()
    a = Number(a)
    updateDisplayMini() //Order Preference = 0
    a *= isNegative //Order Preference = 0
    isNegative = 1 //Order Preference = 1
    numbers.push(a) //Order Preference = 1
    numbercounter += 1 //Order Preference = 0
    numbercounterTest() //Order Preference = 1
    displayOperate() //Order Preference = 2
    console.log(numbers)
    console.log(operators)
    console.log(numbercounter)
}

function inputOperator(a) {
    clearLastOperationOfOperation()
    updateDisplayMini()
    let lastNumber = numbers.at(-1)
    if (!(typeof lastNumber === 'string' && lastNumber.at(-1) == 'e' && a == '-')) { //pass unless isNotation and a == '-'
        if (!Number(numbers.at(-1)) && numbers.at(-1) != 0 && numbers.length != 0) { //removes non-numbers
            numbers.at(-1).pop()
        }
        numbers = numbers.map(Number)
        isDecimal = false, isNotation = false
        if (numbercounter >= 1) { //prevents cases like 1 + * 2, allows 1 + -2. Instead of 1 + * 2, becomes 1 * 2.
            operators.push(a)
            numbercounter = 0
            displayOperate()
        } else if (a == '-') {
            isNegative = -1
        } else if (numbercounter == 0) { //substitutes the old operator
            operators.pop()
            operators.push(a)
            isNegative = 1
        }
    } else { isNegative = -1 } //if isNotation and a == '-', will make the right side of the notation negative. e.g. 1e-2
    console.log(numbers)
    console.log(operators)
    console.log(numbercounter)
}

function inputSpecial(a) {
    switch (a) {
        case '.':
            clearLastOperationOfOperation()
            if (isDecimal === false && Number(numbers.at(-1) + '.1')) { // checks if is already decimal and if will break
                numbers[numbers.indexOf(numbers.at(-1))] = (numbers.at(-1)) + '.'
                isDecimal = true
            }
            break
        case 'e':
            clearLastOperationOfOperation()
            if (isNotation === false && Number(numbers.at(-1) + 'e+2')) { // checks if is already notation and if will break
                numbers[numbers.indexOf(numbers.at(-1))] = (numbers.at(-1)) + 'e'
                isNotation = true
            }
            break
        case '=':
            if (numbers.length >= 1) {
                if (lastNumberOfOperation && lastOperatorOfOperation) {
                    updateDisplayMini()
                    numbers.push(lastNumberOfOperation)
                    operators.push(lastOperatorOfOperation)
                    displayOperate()
                }
                document.getElementById("display_main").innerHTML = displayProcess + '= ' + operate()
                recordLastOperation = true
            }
            break
        case 'C': //resets everything except display-mini
            updateDisplayMini()
            numbers.length = 0
            operators.length = 0
            numbercounter = 0
            isNegative = 1
            isDecimal = false, isNotation = false
            document.getElementById("display_main").innerHTML = empty
    }
    console.log(numbers)
    console.log(operators)
}

function numbercounterTest() {
    if (numbercounter >= 2) {

        let newNumber = concatenateNumbers(numbers.at(-2), numbers.at(-1))
        numbers.pop()
        numbers.pop()
        numbers.push(newNumber)
        numbercounter = 1
    }
}

function operate() {
    let orderOfPrecedence = document.getElementById('operationOrder').value
    if (numbers.length >= 1) { //if case is not useful, the same condition has to be met at case '=' of inputSpecial()
        console.log(numbers)
        console.log(operators)
        lastNumberOfOperation = numbers.at(-1)
        lastOperatorOfOperation = operators.at(-1)
        if (orderOfPrecedence == 'weighted') { //Will calculate '×' and '÷'. Then, transform the numbers and operators arrays. Skipped if not Weighted.
            let orderedOperatorIndex
            let lastIndex = -0.1 //any number below 0
            let numbersLength = numbers.length //keeps constant for whole loop, instead of changing with it.

            do { //breaks if -1 goes into orderedOperators (if there is no x or /).
                //Finds first mult or divis and operates it until none remains.
                orderedOperatorIndex = operators.findIndex(
                    (element) => (element == '×' || element == '÷') && (operators.indexOf(element) > lastIndex)
                )
                if (orderedOperatorIndex != -1) {

                    switch (operators[orderedOperatorIndex]) { //does the operation between the 2 numbers beside the operator and saves.
                        //After all multiplication and divisions, only sums and subtractions will remain.
                        case '×':
                            numbers[orderedOperatorIndex] = numbers[orderedOperatorIndex] * numbers[orderedOperatorIndex + 1]
                            numbers.splice(orderedOperatorIndex + 1, 1)
                            operators.splice(orderedOperatorIndex, 1)
                            break
                        case '÷':
                            numbers[orderedOperatorIndex] = numbers[orderedOperatorIndex] / numbers[orderedOperatorIndex + 1]
                            numbers.splice(orderedOperatorIndex + 1, 1)
                            operators.splice(orderedOperatorIndex, 1)
                            break
                    }
                    console.log(numbers, operators)
                } else { break }
            } while (orderedOperatorIndex != -1); //Copy the structure for greater weights of operations (e.g.: exponentiation).
        }

        console.log(numbers)
        console.log(operators)
        //runs when orderOfPrecedence = leftToRight or Weighted. For weighted, expected to have no '×' or '÷' cases.
        result = Number(numbers.at(0))
        for (let i = 1; i <= numbers.length - 1; i++) {
            switch (operators.at(i - 1)) {
                case '+':
                    result += Number(numbers.at(i))
                    break
                case '-':
                    result -= numbers.at(i)
                    break
                case '×':
                    result *= numbers.at(i)
                    break
                case '÷':
                    result /= numbers.at(i)
                    break
            }
        }
        debugger
        numbers.length = 0
        operators.length = 0
        numbers.push(result)
        numbercounter = 1
        if (result % 1) { isDecimal = true } else { isDecimal = false } //keep isDecimal value for when result is used.
        if (result >= 10e21) { isNotation = true } else { isNotation = false } //keep isNotation value for when result is used.
        if (typeof Number(document.getElementById("places_after_dot_input").value) === 'number') { //gets the input value.
            placesAfterDot = document.getElementById("places_after_dot_input").value
        }
        result = Math.round(result * 10 ** placesAfterDot) / (10 ** placesAfterDot) //rounds the number by placesAfterDot.
        return result
    }
}

function displayOperate() {
    displayProcess = numbers.at(0) + " "
    if (numbers.length >= 2) {
        for (i = 1; i <= numbers.length - 1; i++) {
            displayProcess += operators.at(i - 1) + " "
            displayProcess += numbers.at(i) + " "
        }
    }
    document.getElementById("display_main").innerHTML = displayProcess
}

function updateDisplayMini() {
    if (recordLastOperation) {
        document.getElementById("display_mini_top").innerHTML = displayProcess + '= ' + result
        recordLastOperation = false
    }
}

function clearLastOperationOfOperation() {
    lastNumberOfOperation = ""
    lastOperatorOfOperation = ""
}