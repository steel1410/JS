const message = 'Enter the number: ';
const number = prompt(message);
const sum1 = number%1000;
const sum2 = (number - sum1)/1000;
const b6 = sum1%10;
const b5 = (sum1-b6)%100;
const b4 = (sum1-b5-b6)/100;
const b3 = sum2%10;
const b2 = (sum2-b3)%100;
const b1 = (sum2-b3-b2)/100;
if((b6+b5+b4) == (b3+b2+b1))
alert('Lucky ticket!');
else
alert('Unlucky ticket!');