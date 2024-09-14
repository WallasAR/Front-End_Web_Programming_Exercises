// 2) Uso de document.write() para escrever no HTML
document.write("<h1>Bem-vindo ao site!</h1>");

// 3) Imprimir as propriedades title e URL
document.write(`Título: ${document.title} <br>`);
document.write("URL: " + window.location.href);

// 4) Escrever tags com document.write()
document.write("<h1>Título</h1><h2>Subtítulo</h2><p>parágrafo</p> ");

// 5) Criar um botão que gere um alerta
document.write(`<button onclick="alert('Botão clicado!')">Clique em mim</button>`);

// 6) Obter um elemento pelo id e escrever em sua propriedade innerHTML
document.write(`<p id="text">Texto original</p>`);
document.getElementById("text").innerHTML = "Texto alterado com Javascript";

// 7) Trocar o atributo de algum elemento
document.write(`<p id="paragraph">Este é um parágrafo.</p>`);
document.getElementById("paragraph").style.color = "#00f";

// 8) Declaração de variáveis e leitura de valores de uma caixa de texto
document.write(`<input type="text" id="input" value="Digite algo aqui">
<button onclick="showText()">Exibir Texto</button>
<p id="result"></p>`);

function showText() {
  var text = document.getElementById("input").value;
  document.getElementById("result").innerHTML = "Você digitou: " + text.toUpperCase();
};

// 9) Questão sobre arrays
var fruits = ["Maçã", "Banana", "Laranja"];
document.write("Frutas: " + fruits.join(", "));

// 10) Questão sobre objetos JavaScript
var carro = {modelo: "Civic", ano: 2020};
document.write("<br>Modelo: " + carro.modelo + "<br>");
document.write("Ano: " + carro.ano);