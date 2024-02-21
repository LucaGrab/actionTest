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
testAddWithTwoNumbers(6, 3, 9); // Erwartetes Ergebnis: 8
