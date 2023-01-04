var question1 = 'Enter the first number';
var x = prompt(question1,0);
var question2 = 'Enter the second  number';
var y = prompt(question2,0);
var question3 = 'Enter  1 if you want +, 2 - , 3 * , 4 / ';
var a = prompt (question3);

function count(result){
var x = parseInt(x);
var y = parseInt(y);
var  result;

switch(a) {

    case '1': result = x+y;
    break;
    case '2': result = x-y;
    break;
    case '3': result = x*y;
    break;
    case '4': result = x/y;
    break;
    default: alert('ERROR');
    
}
alert(result);
}
count();
