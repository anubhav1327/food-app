import showData from "./showData.js";
import fetchData from "./fetchData.js";
import navbar from "./nav.js";
let navContainer = document.getElementById("navbar");

navContainer.innerHTML = navbar();

let data = await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`);

showData(data.meals)