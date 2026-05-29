let fruits = [];

function init() {
    renderHeader();
    fetchDataJson();
}

async function fetchDataJson() {
    let response = await fetch('https://www.fruityvice.com/api/fruit/all');
    fruits = await response.json();
    console.log(fruits);
    renderFruits();
}

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "GET", // "GET", POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json",
        }, 
        body: JSON.stringify(data),
    });
    return response.json();
}

function renderHeader() {
    document.getElementById('header').innerHTML = getHeader();
}

function renderFruits() {
    let content = document.getElementById('fruitCards');
    content.innerHTML = '';
    for (let index = 0; index < fruits.length; index++) {
        content.innerHTML += getFruits(fruits[index]);
    }
}