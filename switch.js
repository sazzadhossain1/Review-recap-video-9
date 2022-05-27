const bazarPrice = 100;

let freeShipping1 = false;
let handPicked1 = false;

switch (bazarPrice) {
  case 100:
    freeShipping1 = "product jotha jotho vabe poche deya hobe";
    break;

  case 90:
    freeShipping1 = "praduct pathano jabe na";
    handPicked1 = "nije nije product niye jete hobe";
    break;

  case 30:
    freeShipping1 = "product pathano jabe na";
    handPicked1 = "product neya jabe na";
    break;

  default:
    freeShipping1 = false;
    handPicked1 = false;
}

console.log(freeShipping1);
console.log(handPicked1);
