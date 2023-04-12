const number = Math.floor(Math.random() * 10);
console.log(number);
let chutes = "";
let acertou = false;

console.log(number);

for (let contador = 0; contador < 3; contador++) {
  chutes = prompt("Digite um numbero de 0 a 10");
  if (chutes == number) {
    alert(`Parabéns você acertou! O Numero era ${number}`);
    acertou = true;
    break;
  }
  alert("Resposta Errada!");
}

if (!acertou) {
  alert(`Você errou as 3 tentativas, a resposta era: ${number}`);
}
