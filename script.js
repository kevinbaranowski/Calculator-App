window.addEventListener('load', function() {
    ///////////////HTML ELEMENT DECLARATIONS/////////////
    const button0 = document.getElementById('button_0');
    const button1 = document.getElementById('button_1');
    const button2 = document.getElementById('button_2');
    const button3 = document.getElementById('button_3');
    const button4 = document.getElementById('button_4');
    const button5 = document.getElementById('button_5');
    const button6 = document.getElementById('button_6');
    const button7 = document.getElementById('button_7');
    const button8 = document.getElementById('button_8');
    const button9 = document.getElementById('button_9');
    const divide = document.getElementById('divide');
    const multiply = document.getElementById('multiply');
    const subtract = document.getElementById('subtract');
    const add = document.getElementById('add');
    const clear = document.getElementById('clear');
    const decimal = document.getElementById('decimal_point');
    const equals = document.getElementById('equals');
    const backspaceButton = document.getElementById('backspace');
    const h2 = document.getElementById('input_output');
    let input = '';

    ///////////////FUNCTIONS//////////////////////////////

    function addNumber(button) {
        if (input[0] === '0' && input[1] !== '.') {
            input = ''
        }
        input = input + button.value;
        h2.innerHTML = input;
    }

    function addOperator(operatorButton) {
        try {
            if (input) {
                let splitInput = input.split(' ');
                try {
                    if (!splitInput[1]) {
                        input = input + ' ' + operatorButton.value + ' '
                        h2.innerHTML = input;
                    } else {
                        throw Error('Input does not handle multiple operations at once')
                    }
                } catch (error) {
                    console.log(error)
                }
            } else {
                throw Error('First input can not be an operator')
            }
        } catch (error) {
            console.log(error)
        }
    }

    function addDecimal() {
        let splitInput = input.split(' ');
        try {
            if (!(splitInput[0].includes('.')) || !(splitInput[2].includes('.'))) {
                input = input + decimal.value
                h2.innerHTML = input;
            } else {
                throw Error('Numbers can only contain 1 decimal point.')
            }
        } catch (error) {
            console.log(error)
        }
    }

    function calculate(expStr) {
        const splitStr = expStr.split(' ');
        let operation = splitStr[1];
        let firstNumber = Number(splitStr[0]);
        let secondNumber = Number(splitStr[2]);
        if (operation === '+') {
            return firstNumber + secondNumber
        } else if (operation === '-') {
            return firstNumber - secondNumber
        } else if (operation === '×') {
            return firstNumber * secondNumber
        } else if (operation === '÷') {
            return firstNumber / secondNumber
        }
    }

    function equalsButton() {
        if (input) {
            input = calculate(input.trim()).toString();
            h2.innerHTML = input;
        } else {
            window.alert(Error('No input detected.'))
            console.log(Error('No input detected'))
        }
    }

    function clearButton() {
        input = '0';
        h2.innerHTML = input;
    }

    function backspace() {
        if (input) {
            if (input[input.length - 1] === ' ') {
                input = input.slice(0, -2);
                h2.innerHTML = input;
            } else {
                input = input.slice(0, -1);
                if (!input) {
                    input = '0';
                }
                h2.innerHTML = input;
            }
        } else {
            input = '0';
            h2.innerHTML = input;
            console.log(Error('There is nothing to backspace.'))
        }
    }
    ///////////////////EVENT LISTENERS/////////////////////////

    document.addEventListener('keydown', function() {
        if (event.keyCode === 48 || event.keyCode === 96) { //0
            addNumber(button0);
        } else if (event.keyCode === 49 || event.keyCode === 97) { //1
            addNumber(button1);
        } else if (event.keyCode === 50 || event.keyCode === 98) { //2
            addNumber(button2);
        } else if (event.keyCode === 51 || event.keyCode === 99) { //3
            addNumber(button3);
        } else if (event.keyCode === 52 || event.keyCode === 100) { //4
            addNumber(button4);
        } else if (event.keyCode === 53 || event.keyCode === 101) { //5
            addNumber(button5);
        } else if (event.keyCode === 54 || event.keyCode === 102) { //6
            addNumber(button6);
        } else if (event.keyCode === 55 || event.keyCode === 103) { //7
            addNumber(button7);
        } else if (event.keyCode === 56 || event.keyCode === 104) { //8
            addNumber(button8);
        } else if (event.keyCode === 57 || event.keyCode === 105) { //9
            addNumber(button9);
        } else if (event.keyCode === 190 || event.keyCode === 110) { // decimal point .
            addDecimal();
        } else if (event.keyCode === 111) { //divide
            addOperator(divide)
        } else if (event.keyCode === 106) { //multiply
            addOperator(multiply)
        } else if (event.keyCode === 107) { //add
            addOperator(add);
        } else if (event.keyCode === 109) { //subtract
            addOperator(subtract)
        } else if (event.keyCode === 13) { //equals - enter
            equalsButton();
        } else if (event.keyCode === 8) { //backspace event
            backspace();
        } else if (event.keyCode === 27) { //clear - esc
            clearButton();
        }
    })
    button0.addEventListener('click', function() {
        addNumber(button0);
    })
    button1.addEventListener('click', function() {
        addNumber(button1);
    })
    button2.addEventListener('click', function() {
        addNumber(button2);
    })
    button3.addEventListener('click', function() {
        addNumber(button3);
    })
    button4.addEventListener('click', function() {
        addNumber(button4);
    })
    button5.addEventListener('click', function() {
        addNumber(button5);
    })
    button6.addEventListener('click', function() {
        addNumber(button6);
    })
    button7.addEventListener('click', function() {
        addNumber(button7);
    })
    button8.addEventListener('click', function() {
        addNumber(button8);
    })
    button9.addEventListener('click', function() {
        addNumber(button9);
    })
    divide.addEventListener('click', function () {
        addOperator(divide);  
    })
    multiply.addEventListener('click', function () {
        addOperator(multiply);
    })
    subtract.addEventListener('click', function () {
        addOperator(subtract);
    })
    add.addEventListener('click', function () {
        addOperator(add);
    })
    decimal.addEventListener('click', function () {
        addDecimal();  
    })
    clear.addEventListener('click', function() {
        clearButton();
    })
    backspaceButton.addEventListener('click', function() {
        backspace();
    })
    equals.addEventListener('click', function() {
        equalsButton();
    })
})