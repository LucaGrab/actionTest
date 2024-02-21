// Test cases for addiere function
const addiere = require('./index.js');
function testAddWithTwoNumbers(a, b, expected) {
    const result = addiere(a, b);
    if(result === expected) {
      console.log(`Test erfolgreich: ${a} + ${b} = ${expected}`);
    } else {
      console.error(`Test fehlgeschlagen: ${a} + ${b} sollte ${expected} sein, aber war ${result}`);
      throw new Error(`Test fehlgeschlagen: ${a} + ${b} sollte ${expected} sein, aber war ${result}`);

    }
  }
testAddWithTwoNumbers(5, 3, 8); // Erwartetes Ergebnis: 8
