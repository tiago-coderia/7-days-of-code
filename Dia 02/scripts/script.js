let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let getName = document.querySelector(".name").value;
  let getAge = document.querySelector(".age").value;
  let getProfession = document.querySelector(".profession").value;
  console.log(getName, getAge, getProfession);

  //   RESET
  document.querySelector(".name").value = null;
  document.querySelector(".age").value = null;
  document.querySelector(".profession").value = null;

  //   CALLING FUNCTION
  createResponse(getName, getAge, getProfession);

  let form = document.querySelector(".form");
  form.style.display = "none";
});

function createResponse(getName, getAge, getProfession) {
  // CREATING A DIV
  let response = document.createElement("div");
  response.className = "responses";

  // DIV CONTENT
  response.innerHTML = `
  <p>Olá ${getName} tudo bem? <br> Pelo que vejo, você tem ${getAge} anos e trabalha como ${getProfession}!</p>
  <br>
  <p>Eae? Você curte o que faz?</p>
  <br>
  <input type="radio" name="option" id="yes" class="yes">
  <label for="yes" class="opts yes">Sim</label>
  <input type="radio" name="option" id="no" class="no">
  <label for="no" class="opts no">Não</label>
  <br>
  <br>
  <div class="positive-response"><p>Ah legal! Continue estudando! Você terá bons caminhos nessa profissão!</p></div>
  <div class="negative-response"><p>Eita! Acho que já está mais que na hora de encontrar sua profissão certa né?!</p></div>

  <br>
  <br>

  <a href="/" class="btn-send">Voltar</a>
  `;

  document.querySelector(".response").appendChild(response);

  // CONDITION SECOND RESPONSE

  let positiveRes = document.querySelector(".positive-response");
  let negatveRes = document.querySelector(".negative-response");
  let yesInput = document.querySelector(".yes");
  let noInput = document.querySelector(".no");

  yesInput.addEventListener("click", () => {
    positiveRes.style.display = "block";
    negatveRes.style.display = "none";
  });
  noInput.addEventListener("click", () => {
    positiveRes.style.display = "none";
    negatveRes.style.display = "block";
  });
}
