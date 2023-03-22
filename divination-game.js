const jogoAdivinha = {
  numero: 100,
  tentativa: 0,
  numeroSorteado: function geraValorAleatorio() {
    return Math.round(Math.random() * this.numero);
  },
};

const btnVerifica = document.getElementById("btnVerificar");
const status = document.getElementById("status");
const tentativa = document.getElementById("tentativa");
const chute = document.getElementById("chute");

let numeroSorteado = jogoAdivinha.numeroSorteado();

function atualizarTentativa(tentativa, valor) {
  if (valor > 1) {
    tentativa.innerHTML =
      'Tentativas : <span style="color: blue">' + valor + "</span>";
  } else {
    tentativa.innerHTML =
      'Tentativa : <span style="color: blue">' + valor + "</span>";
  }
}

function reiniciar() {
  btnVerifica.innerText = "VERIFICAR";
  tentativa.innerHTML = "Tentativa :  0";
  chute.disabled = false;
  chute.value = "";
  jogoAdivinha.tentativa = 0;
  numeroSorteado = jogoAdivinha.numeroSorteado();
  btnVerifica.removeEventListener("click", reiniciar);
}

const formAdivinha = document.getElementById("form");

formAdivinha.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!!chute.value == false) {
    status.innerHTML = '<span style="color:#FF3D00">DIGITE UM NÚMERO</span>';
    return;
  }

  atualizarTentativa(tentativa, ++jogoAdivinha.tentativa);

  if (numeroSorteado == chute.value) {
    status.innerHTML =
      '<span style="color:#228B22">PARABÉNS, VOCÊ ACERTOU!!</span>';
    chute.disabled = true;
    btnVerifica.innerText = "Quer tentar novamente?";
    btnVerifica.addEventListener("click", reiniciar);
  } else if (numeroSorteado > chute.value) {
    status.innerText = "O número sorteado é maior!";
  } else if (numeroSorteado < chute.value) {
    status.innerText = "O número sorteado é menor!";
  }
});
