import showData from "./showData.js";
import fetchData from "./fetchData.js";
import navbar from "./nav.js";
let navContainer = document.getElementById("navbar");
navContainer.innerHTML = navbar();


async function search(query){
    let data = await fetchData(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    showData(data.meals);
}

document.getElementById("result").style.display = "none"
let timerId;
window.debounce =  function() {
    document.getElementById("result").style.display = "grid"
    if(timerId){
        clearTimeout(timerId);
    }
    const query = document.getElementById("query").value;
    timerId = setTimeout(function(){
        search(query);
    },500);
}





