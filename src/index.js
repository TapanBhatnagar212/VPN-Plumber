import main from "./script";

// const api = "https://covid19.mathdro.id/api/countries";
// const errors = document.querySelector(".errors");
// const loading = document.querySelector(".loading");
// const cases = document.querySelector(".cases");
// const recovered = document.querySelector(".recovered");
// const deaths = document.querySelector(".deaths");
// const results = document.querySelector(".result-container");
// results.style.display = "none";
// loading.style.display = "none";
// errors.textContent = "";
// grab the form
// const form = document.querySelector(".form-data");

// document.addEventListener('DOMContentLoaded', function() {
let btn = document.getElementById("clickBtn");
let successBtn = document.getElementById("succBtn");
successBtn.style.display = "none";
if (btn) {
    btn.addEventListener("click", handleClick);
}

if (successBtn) {
    successBtn.addEventListener("click", stopClick);
}
// });
// const button = document.getElementById("clickBtn");
// if (button){
//   button.addEventListener("click", handleClick());
// }

function handleClick() {
    btn.style.display = "none";
    if (successBtn) {
        successBtn.style.display = "block";
    }
    // e.preventDefault();
    console.log("this is test");
    // searchForCountry(country.value);
    // console.log(country.value);
    main(1)
}


function stopClick() {
  main(2);
  successBtn.style.display = "none";
  btn.style.display = "block";
}


// grab the country name
// const country = document.querySelector(".country-name");

//declare a method to search by country name
// const searchForCountry = async countryName => {
//
//   loading.style.display = "block";
//   errors.textContent = "";
//   try {
//     const response = await axios.get(`${api}/${countryName}`);
//     loading.style.display = "none";
//     cases.textContent = response.data.confirmed.value;
//     recovered.textContent = response.data.recovered.value;
//     deaths.textContent = response.data.deaths.value;
//     results.style.display = "block";
//   } catch (error) {
//     loading.style.display = "none";
//     results.style.display = "none";
//     errors.textContent = "We have no data for the country you have requested.";
//   }
// };

// declare a function to handle form submission


// form.addEventListener("click", e => handleSubmit(e));

