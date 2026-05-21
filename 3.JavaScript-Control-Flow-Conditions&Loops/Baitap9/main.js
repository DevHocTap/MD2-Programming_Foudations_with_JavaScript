let n = parseInt(prompt("Nhập vào một số nguyên bất kỳ:"));
let isPrime = true;

if (n < 2) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false; 
      break; 
    }
  }
}

if (isPrime) {
  console.log(`${n} là số nguyên tố.`);
} else {
  console.log(`${n} không phải số nguyên tố.`);
}
