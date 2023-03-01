//Variaveis

const apikey = "18bd9447eefe8ff200cce9e260f5c339";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

// Funções



// Eventos

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    console.log("city");
});