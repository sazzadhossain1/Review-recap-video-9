const productPrice = 100;

let freeShipping = false;
let handPicked = false;

// if (productPrice >= 100) {
//   freeShipping = true;
// } else if (productPrice >= 60) {
//   freeShipping = false;
//   handPicked = true;
// } else {
//   freeShipping = false;
//   handPicked = false;
// }

freeShipping =
  productPrice >= 100
    ? "product bashay pochey dibo"
    : "tar product se nihe niye jabe";

// handPicked = productPrice > 60 && productPrice < 99 ? true : false;
handPicked =
  productPrice > 60 || productPrice < 99
    ? "free shipping"
    : "tar product se nihe niye jabe";
console.log(freeShipping);
console.log(handPicked);
