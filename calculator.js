//Define blank variables.
var temp = '';
var total = 0;
var entered = [];
var toCalculate = [];

//Add inputted numbers when number buttons pressed...
function addClick(n) {
    temp = '';
    //Limit length within 12 characters.
    /*if (temp.length < 12) {*/
        entered.push(n);
    
    //...then convert the array into a compatible format...
    for (var c = 0; c < entered.length; c++) { 
        temp += entered[c];
    }
    //... and display it in the window.
    display(temp);
    /*} else if (temp.length >= 12) {
        entered.push();
    }*/
}

// When AC button pressed, clear everything.
function allClear() {
    //Clear all variables...
    temp = '';
    total = 0;
    entered = [];
    //...and zero the display window.
    display(0);
}

// Display what's been pressed in the window.
function display(d) {
    document.getElementById("display").innerHTML = d;
}

// There can only be one decimal point in the display at a time.
function checkDecimal () {
    /*
    if () {

    }
    */
}
//When operator button pressed, store the current displayed number in 'toCalculate'.
function operatorSign (){
    /*
    if (addClick('+')) {
    tempStr.push("*")
    }
    */
   //If the last button press was a sign, change it.
   //Reset the one decimal point rule.
}


//Convert to number when Equal button pressed...
function doCalc() {
    for (var c = 0; c < entered.length; c++) { 
        total += entered[c];
    }
    //...then calculate and display it.
    display(total);
}

