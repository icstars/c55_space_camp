var subtotal = 0;

// get a gallon of milk - $3.00

subtotal = subtotal + 3;
// we could also write:
// subtotal += 3;

// a bag of doritos - $4.99

subtotal = subtotal + 4.99;

// five pounds of gravel

subtotal = subtotal + 25.87;

console.log("Your subtotal is:");
console.log(subtotal);

var tax_owed = subtotal * 0.07;

console.log("Your tax owed is:");
console.log(tax_owed);

console.log("Your final total is:")
console.log(subtotal + tax_owed);

