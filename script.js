function checkPrime() {
  const num = parseInt(document.getElementById("numberInput").value);
  const result = document.getElementById("result");

  if (isNaN(num) || num < 2) {
    result.innerHTML = "⚠️ Please enter a number greater than 1.";
    return; // ✅ This is inside the function, so no error
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result.innerHTML = `✅ ${num} is a Prime Number.`;
  } else {
    result.innerHTML = `❌ ${num} is NOT a Prime Number.`;
  }
}
