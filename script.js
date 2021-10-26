"use strict";

const body = document.querySelector("body");
const countryCard = document.querySelector(".country-card");
const search = document.querySelector("#search");
const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(search.value);
  console.log("working");
  getCountryData(search.value);
});

const request = fetch("https://restcountries.com/v3.1/name/india");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data[0]);
      showCountry(data[0]);
    });
};

function showCountry(data) {
  // console.log(data.languages);
  // console.log(data.currencies);
  const x = data.languages;
  const y = data.currencies;
  const z = (data.population / 1000000).toFixed(1) + "M";
  const arry = [];
  // console.log(y);
  for (const [key, val] of Object.entries(y)) {
    // console.log(val.name);
    arry.push(val.name);
  }
  // console.log(x);

  const arr = [];

  for (const [key, value] of Object.entries(x)) {
    // console.log(`${value}`);
    arr.push(value);
  }

  // console.log(arr);
  // console.log(arr.toString());

  const html = `<div class="card">
  <img src="${data.flags.png}" alt="flat-img" />
  <div class="country-data">
  <p class="country-name common">${data.name.common}</p>
  <p class="country-capital common">${data.capital}</p>
  <p class="region common">${data.region}</p>
  <p class="population common">👫 ${z}</p>
  <p class="language common">🗣️ ${arr.toString()}</p>
  <p class="currency common">💰 ${arry}</p>
</div></div>`;
  countryCard.insertAdjacentHTML("beforeend", html);
}

// getCountryData("india");
// getCountryData("pakistan");
// getCountryData("usa");
// getCountryData("canada");
// getCountryData("france");
