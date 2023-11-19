function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  function generateNumbers() {
    const container = document.getElementById('numbersContainer');
    for (let i = 1; i <= 100; i++) {
      const numberDiv = document.createElement('div');
      numberDiv.classList.add('number');
  
      if (i % 2 === 0) {
        numberDiv.classList.add('even');
      } else {
        numberDiv.classList.add('odd');
      }
  
      if (isPrime(i)) {
        numberDiv.classList.add('prime');
      }
  
      numberDiv.textContent = i;
      container.appendChild(numberDiv);
    }
  }
  
  generateNumbers();
  