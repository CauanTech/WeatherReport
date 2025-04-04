// Minha Chave da API
const API_KEY = "e0283766cee7e7e70be7e75409ae8042";

// Função para pegar o valor do input

async function coletarValor() {
  let cidade  = document.querySelector(".input-city").value ;
  console.log(cidade);
  dadosAPI(cidade);

}

async function dadosAPI(cidade) {
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&lang=pt_br&units=metric`).then(response => response.json())
    console.log(dados);
    dadosTela(dados);
}

function dadosTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em: " + dados.name;
    document.querySelector(".temperatura").innerHTML = "Temperatura: " +  Math.floor(dados.main.temp) + " °C ";
    document.querySelector(".icone-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
    document.querySelector(".previsao").innerHTML = "Previsão: " + dados.weather[0].description.toUpperCase();
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
}