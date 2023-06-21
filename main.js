const userName = document.querySelector("#name");
const userTelephone = document.querySelector("#telephone");
const btnSubmit = document.querySelector("button");
const userRow = document.querySelector(".userRow");

function verifyInput(input) {
  console.log(input.value);
  if (input.value !== "") {
    return true;
  }
  alert(`Erro: Você não digitou o campo ${input.name}`);
  return false;
}

function insertName(name, userTelephone) {
  const verified = verifyInput(name);
  if (verified) {
    const verified = verifyInput(userTelephone);
    if (verified) {
      userRow.innerHTML += `<tr><td>${name.value}</td><td>${userTelephone.value}</td></tr>`;
    }
  }
}

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  insertName(userName, userTelephone);
  userName.value = '';
  userTelephone.value = '';
});
