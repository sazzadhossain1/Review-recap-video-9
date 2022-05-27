const productPrice = 100;

let freeShipping = false;
let handPicked = false;

if (productPrice >= 100) {
  freeShipping = true;
} else if (productPrice >= 60) {
  freeShipping = false;
  handPicked = true;
} else {
  freeShipping = false;
  handPicked = false;
}

console.log(freeShipping);
console.log(handPicked);
