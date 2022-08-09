let no1 = prompt("no1= ");
let a = parseInt(no1);
let no2 = prompt("no2 = ");
let b = parseInt(no2);
let x = prompt("Which Arithmetic Operator do you wanna use?")
switch (x) {
  case '+':
    console.log(a + b)
    break;
  case '-':
    console.log(a - b)
    break;
  case '*':
    console.log(a * b)
    break;
  case '/':
    console.log(a / b)
    break;
  case '%':
    console.log(a % b)
    break;
  case '**':
    console.log(a ** b)
}