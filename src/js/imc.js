let pesoInput = document.getElementById("weight");
let alturaInput = document.getElementById("height");
let resultImc = document.getElementById("value");
let verifiqueImc = document.getElementById("verifiqueImc");

function calcularImc() {
    let peso = parseFloat(pesoInput.value);
    let altura = parseFloat(alturaInput.value);
    let imc = peso/(altura**2);
    resultImc.innerHTML = imc.toFixed(1);
    verfique(imc);
}

function verfique(imc) {
    if (imc <= 16.0) {
        verifiqueImc.innerText = "Magro";
    } else if (imc > 16.0 && imc <= 18.4) {
        verifiqueImc.innerText = "Peso-normal";
    } else if (imc > 18.5 && imc <= 24.9) {
        verifiqueImc.innerText = "SobrePeso";
    } else if (imc > 25.0 && imc <= 29.9) {
        verifiqueImc.innerText = "Obsesidade Grau I";
    } else if (imc > 30.0 && imc <= 34.9) {
        verifiqueImc.innerText = "Obsesidade Grau II";
    } else if (imc > 35.0 && imc <= 39.9) {
        verifiqueImc.innerText = "Obsesidade Grau III";
    } else if (imc >= 40.0) {
        verifiqueImc.innerText = "Obsesidade Grau IV";
    }
}

document.getElementById("calculate").addEventListener("click", calcularImc);



