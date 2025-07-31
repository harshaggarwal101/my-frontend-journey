const num = 180;

let flag = 0;

if (num === 1) {
  console.log("1 is neither prime nor composite");
} else if (num <= 0) {
  console.log("We can only check positive numbers");
} else {
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      flag++;
    }
  }

  if (flag === 0) {
    console.log("The number is prime");
  } else {
    console.log(`Not prime. The number has ${flag} factors other than 1 and itself`);
  }
}
