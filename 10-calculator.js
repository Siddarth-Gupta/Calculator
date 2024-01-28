let calculation = localStorage.getItem('calculation') || '';
      
      displayCalculation();

      function updateCalculation(operand) {
        calculation += operand;
        displayCalculation()
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-display-calculation').innerHTML = calculation;  
      }