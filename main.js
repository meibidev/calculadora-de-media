
function calculando(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const grade1 = parseInt(document.getElementById("grade1").value, 10);
  const grade2 = parseInt(document.getElementById("grade2").value, 10);
  const grade3 = parseInt(document.getElementById("grade3").value, 10);
  const grade4 = parseInt(document.getElementById("grade4").value, 10);
  
  var conta = (grade1 + grade2 + grade3 + grade4) / 4
  
  let formulario__resultado = document.createElement("p");

  if (conta >= 7) {
    formulario__resultado.innerText = "Parabéns " + nome + " sua média foi " + conta + " . Você passou!";
  } else {
    formulario__resultado.innerText = "Não foi dessa vez " + nome + "! Sua média foi " + conta + " , mas não desista!" ;
  }

  document.getElementById('resultado').innerHTML = ''
  document.getElementById('resultado').appendChild(formulario__resultado)
  
}

document.querySelector("form").addEventListener("submit", calculando);