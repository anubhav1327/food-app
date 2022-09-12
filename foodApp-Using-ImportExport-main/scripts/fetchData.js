async function fetchData(url){
    let res = await fetch(url);
    try {
        let data = await res.json();
        return data;
    } catch (error) {
        console.log("Error is : "+ error);
        alert("Not Found")
    }
}

export default fetchData;