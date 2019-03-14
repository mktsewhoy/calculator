//Define blank variables.
var tempDispl = '';
var total = 0;
var toCalculate = [];

//Add inputted numbers when number buttons pressed...
function addClick(n) {
    if (tempDispl.length < 12) {
    tempDispl += n;
    } else {tempDispl += '';}
    display(tempDispl);
}

// When AC button pressed, clear everything.
function allClear() {
    //Clear all variables...
    tempDispl = '';
    total = 0;
    toCalculate = [];
    //...and zero the display window.
    display(0);
}

// Display what's been pressed in the window.
function display(d) {
    document.getElementById("display").innerHTML = d;
    //document.getElementById("display").maxLength = "12";
}

// Check for any out-of-place decimal points.
/*function checkDecimal (n) {
    //There can only be one decimal point in the display at a time, or a NaN will be returned.
        //If decimal point already found, do nothing...
    if (enteredDigits[c] = '.') {
        enteredDigits.push('');
    //... otherwise put in a decimal point.
    } else {
        enteredDigits.push('.');
        }
}*/
//When operator button pressed, store the current displayed number ('tempDispl') in 'toCalculate'.
function addOperator (op){
    //Copy the contents of 'temp' into 'toCalculate'.   
    toCalculate.push(tempDispl);
    if (op == ('+')) { 
        toCalculate.push('+');
    } else if (op == ('-')) {
        toCalculate.push('-');
    } else if (op == ('/')) {
        toCalculate.push('/');
    } else if (op == ('*')) {
        toCalculate.push('*');
    }
    //Display the operator for user convenience.
    display(op);

    //Reset 'tempDispl' to make way for the next number to be processed.
    tempDispl = '';
}


//Convert to number when Equal button pressed...
function doCalc() {
    total = '';
    toCalculate.push(tempDispl);
    total = eval(toCalculate.join(''));

    //If result is bigger than 12 digits, use exponential notation.
    if (total > 999999999999) {
        display(total.toExponential(10));
    } else {
    //...then calculate and display it.
    display(total);
    }
    //tempDispl = '';
    //toCalculate = [];
}

