const area = prompt(
  "Você quer seguir para área de Front-End ou de Back-End? Digite o nome da área:"
);

let responseArea = "";
if (area === "Front-End") {
  responseArea = prompt("Você quer aprender React ou Vue?");
} else if (area === "Back-End") {
  responseArea = prompt("Você quer aprender Java ou C#?");
} else {
  responseArea = prompt("Resposta Inválida");
}

const fullstack = prompt(
  "Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack"
);

let fullstackResponse = "";
if (fullstack == "1") {
  fullstackResponse = alert(
    `Continue se especializando em ${responseArea} para dominar a área de ${area}!`
  );
} else if (fullstack == "2") {
  fullstackResponse = alert(
    `Chegou a hora de começar a aprender outras linguagens além de ${responseArea} se você quer se tornar Fullstack!`
  );
} else {
  fullstackResponse = alert("Resposta Inválida");
}

const lastTech = prompt(
  "Tem mais alguma tecnologia que você gostaria de aprender? Digite Sim em caso positivo. Não para Negativo"
);

while (lastTech === "Sim") {
  let lastTechResponse = prompt("Qual?");
  alert(`${lastTechResponse} é realmente uma tecnologia muito legal!`);
  lastTech = prompt(
    "Tem mais alguma tecnologia que você gostaria de aprender? Digite Sim em caso positivo. Não para Negativo"
  );
}
