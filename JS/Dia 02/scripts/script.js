function capturaDados() {
  let name = document.querySelector(".name").value;
  let age = document.querySelector(".age").value;
  let skill = document.querySelector(".skill").value;

  criarDiv(name, age, skill);
}

function criarDiv(name, age, skill) {
  let div = document.createElement("div");
  div.className = "base-box response-box";

  div.innerHTML = `

  <p>Olá, ${name}, você tem ${age} anos e já está aprendendo ${skill}</p>
  <p>Você gosta de estudar ${skill} ?</p>
  <p style="display:flex">
    <span>
      <input type="radio" name="option" id="yes">
      <label for="yes" class="opts yes">Sim</label>
    </span>
    <span>
      <input type="radio" name="option" id="no">
      <label for="no" class="opts no">Não</label>
    </span>
  </p>
  
  `;
  document.body.appendChild(div);
}
