'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
  var addSum = a + b;
  var textSum = 'The sum of '+ a + ' and ' + b + ' is ' + addSum + '.';
    return[addSum,textSum];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
    var mulTi = a * b;
    var textmul = 'The product of '+ a + ' and ' + b + ' is ' + mulTi + '.';
    return[mulTi,textmul];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line 
    var sumM = sum(a,b)[0];
    var reSult = sum(sumM,c)[0];
    console.log(reSult);
    var mulAandb =  multiply(a,b)[0];
    var mulResult = multiply(mulAandb,c)[0];
    console.log(mulResult);
    var sumA = (a+ ' and '+ b + ' and '+ c+ ' sum to '+ reSult +'.');

    console.log(sumA);
    var moA = ('The product of '+a+' and '+b+' and '+c+' is '+ mulResult+'.');
    console.log(moA);
    
    return[reSult,mulResult,sumA,moA];
}
// sumAndMultiply(testArray);
sumAndMultiply(testArray);
// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
    var reSult1 = sum(testArray[0],testArray[1])[0];
    console.log(reSult1);
    var reSult2 = sum(reSult1,testArray[2])[0];
    console.log(reSult2);
    var sumAbc = `${testArray[0]},${testArray[1]},${testArray[2]} was passed in as an array of numbers, and ${reSult2} is their sum.`
    console.log(sumAbc);
    
    return [reSult2, sumAbc];
}
sumArray(testArray);
// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line
    var reSult3 = multiply(testArray[0],testArray[1])[0];
    console.log(reSult3);
    var reSult4 = multiply(reSult3,testArray[2])[0];
    console.log(reSult4);
    var sumAbc1 = `The numbers ${testArray[0]},${testArray[1]},${testArray[2]} have a product of ${reSult4}.`
    console.log(sumAbc1);
    
    return [reSult4, sumAbc1];
}
multiplyArray(testArray);

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1,2,3,4,5]; //eslint-disable-line



function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    var numM = testDynamicArray[0];
    // var reSult5 = multiply(testDynamicArray[0],testDynamicArray[1])[0];
    // console.log(reSult5);
    // var reSult6 = multiply(testDynamicArray[2],testDynamicArray[3])[0];
    // console.log(reSult6);
    // var reSult7 = multiply(reSult5,reSult6)[0];
    // console.log(reSult7);
    // var fiNalrs = multiply(reSult7,testDynamicArray[4])[0];
    // console.log(fiNalrs);
    // var lastResult = `The numbers ${testDynamicArray[0]},${testDynamicArray[1]},${testDynamicArray[2]},${testDynamicArray[3]},${testDynamicArray[4]} have a product of ${fiNalrs}.`
    // console.log(lastResult);
    // return [fiNalrs,lastResult]; 
// return string , 
    for (var i = 0; i < testDynamicArray.length; i++) { 
        var result = multiply(numM, testDynamicArray[i])[0];

        console.log('Result: ' , result);
        console.log('Index:', i);

        numM = result;

    }
   
    var lastResult = `The numbers ${testDynamicArray} have a product of ${result}.`
    console.log('numM',numM)
    return [numM, lastResult];


}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.