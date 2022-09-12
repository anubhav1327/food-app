function showData(data){
    if(data == null){
        alert("Not Found");
    }
    let displayBox = document.getElementById("result");

    displayBox.innerHTML = ""
    data.forEach(function(ele,i){
        let img = document.createElement("img");
        img.src = ele.strMealThumb;

        let name = document.createElement('h2');
        name.innerText = ele.strMeal;

        displayBox.append(img,name);
    });
}

export default showData;