// const countriesList = document.getElementById("countries");
// let countries;

// countriesList.addEventListener("change", newCountrySelection);

// function newCountrySelection(event) {
//     displayCountryInfo(event.target.value);
// }

fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("ERROR:", err));


// function initialize(countriesData) {
//     countries = countriesData;
//     let options = "";

//     countries.forEach(country => {
        
//     });
// }


