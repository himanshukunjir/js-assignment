console.log("Prime no");

let n=parseInt(prompt("Enter any number:"));
  console.log(n);

    nextPrime:
for (let i = 2; i <= n; i++) { 

  for (let j = 2; j < i; j++) { 
    if (i % j == 0) continue nextPrime;
  }
   alert(`${i} is a prime number`,);
}
    
