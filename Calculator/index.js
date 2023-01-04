
var x = prompt('Enter the first number',0);
var y = prompt('Enter the second  number',0);
var a = prompt ('Enter the 1 and will work +, 2 - , 3 * , 4 / ');

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
