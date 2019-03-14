//Define blank variables.
var tempDispl = '';
var total = 0;
var enteredDigits = [];
var toCalculate = 0;

//Add inputted numbers when number buttons pressed...
function addClick(n) {
    tempDispl = '';
    //Check whether number or operator pressed.
    //if (n != '+' && n !='-' && n != '/' && n != '*') {
        enteredDigits.push(n);
    
    //...then convert the array into a compatible format...
    for (var c = 0; c < enteredDigits.length; c++) {
        //If decimal button pressed and duplicate decimal point found, skip.
        /*if (n == '.' && enteredDigits[c] == '.') {
            tempDispl += '';
        } else if (n == '.' && enteredDigits[c] != '.') {
            tempDispl += '.';
        } else {*/
        tempDispl += enteredDigits[c];
        //}
    }
    //... and display it in the window.
    display(tempDispl);
    //} //else if (temp.length >= 12) {
        //entered.push();
}

// When AC button pressed, clear everything.
function allClear() {
    //Clear all variables...
    tempDispl = '';
    total = 0;
    enteredDigits = [];
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
//When operator button pressed, store the current displayed number ('temp') in 'toCalculate'.
function addOperator (op){
    //var toCalculate = '';
    //Copy the contents of 'temp' into 'toCalculate'.   
    if (op == ('+')) {
        toCalculate == tempDispl + '+';    
    } else if (op == ('-')) {
        toCalculate == tempDispl + '-';
    } else if (op == ('/')) {
        toCalculate == tempDispl + '/';
    } else if (op == ('*')) {
        toCalculate == tempDispl + '*';
    }
    //Display the operator for user convenience.
    display(op);

    //Reset 'tempDispl' to make way for the next number to be processed.
    tempDispl = '';

   //If the last button press was a sign, change it.
   //Reset the one decimal point rule.
}


//Convert to number when Equal button pressed...
function doCalc() {
    total = '';
    for (var c = 0; c < entered.length; c++) { 
        total += enteredDigits[c];
    }

    //...then calculate and display it.
    display(total);
}

