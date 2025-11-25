// Exemplo for tradicional
let i = 5;

for (i; i >= 0; i--) {
  if (i === 0) {
    console.log("🚀 Lançamento!");
  } else {
    console.log(`Contagem: ${i}`);
  }
}

console.log(`Valor final de i: ${i}`);

// Exemplo for...of
const numeros = [1, 2, 3, 10, 21, 44];

for (const n of numeros) {
  if (n % 2 === 0) {
    console.log(`${n} é par`);
  } else {
    console.log(`${n} é ímpar`);
  }
}
