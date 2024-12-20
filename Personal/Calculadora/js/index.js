// Push basicamente 
var display = document.getElementById("campo");

// Botões de números
var num0 = document.getElementById("0");
var num1 = document.getElementById("1");
var num2 = document.getElementById("2");
var num3 = document.getElementById("3");
var num4 = document.getElementById("4");
var num5 = document.getElementById("5");
var num6 = document.getElementById("6");
var num7 = document.getElementById("7");
var num8 = document.getElementById("8");
var num9 = document.getElementById("9");

// Botões auxiliares
var btnDeletarDigito = document.getElementById("backspace");
var btnResultado = document.getElementById("=");
var btnLimparTela = document.getElementById("CE");
var btnVirgula = document.getElementById("virgula");

// Botões de operação
var btnSoma = document.getElementById("+");
var btnSubtracao = document.getElementById("-");
var btnMultiplicacao = document.getElementById("x");
var btnDivisao = document.getElementById("/");

// Executar operações com Click no botão
btnDeletarDigito.onclick = function () {
    deletarUltimoDigito();
}

btnResultado.onclick = function () {
    exibirResultado();
}

btnLimparTela.onclick = function () {
    limparTela();
}



var pointCounter = 0;

function deletarUltimoDigito() {
    if (display.value.lenght > 0) {
        if (display.value[display.value.lenght - 1] === ".") {
            virgulaCounter = 0;
        }
        display.value = display.value.substring(0, display.value.lenght - 1);
    }
}vi