let main = document.getElementById("main");
let main1 = document.getElementById("main1");
let main2 = document.getElementById("main2");
let main3 = document.getElementById("main3");

let car1 = {
    image: "<img src = zaz_lanos_1.jpg>",
    name: "Zaz Lanos",
    price: 4500,
    color: "Червоний",
    probig: 18
}
let cars = `<div class="car">
            ${car1.image}
            <h2 align="center">${car1.name}</h2><br>
            <h3>Ціна: ${car1.price}$</h3><br>
            <h3>Колір: ${car1.color}</h3><br>
            <h3>Пробіг: ${car1.probig} тис. км</h3>
        </div>`;

let car2 = {
    image: "<img src = audi.jpg>",
    name: "Audi",
    price: 5000,
    color: "Сірий",
    probig: 21
}
cars += `<div class="car">
    ${car2.image}
    <h2 align="center">${car2.name}</h2><br>
    <h3>Ціна: ${car2.price}$</h3><br>
    <h3>Колір: ${car2.color}</h3><br>
    <h3>Пробіг: ${car2.probig} тис. км</h3>
    </div>`;
    
let car3 = {
        image: "<img src = 1.jpg>",
        name: "Chevrolet Camaro",
        price: 5300,
        color: "Жовтий",
        probig: 23
    }
cars += `<div class="car">
        ${car3.image}
        <h2 align="center">${car3.name}</h2><br>
        <h3>Ціна: ${car3.price}$</h3><br>
        <h3>Колір: ${car3.color}</h3><br>
        <h3>Пробіг: ${car3.probig} тис. км</h3>
        </div>`;

let car4 = {
            image: "<img src = 2.jpg>",
            name: "Rolls royce",
            price: 6000,
            color: "Білий",
            probig: 25
        }
cars += `<div class="car">
            ${car4.image}
            <h2 align="center">${car4.name}</h2><br>
            <h3>Ціна: ${car4.price}$</h3><br>
            <h3>Колір: ${car4.color}</h3><br>
            <h3>Пробіг: ${car4.probig} тис. км</h3>
            </div>`;


    
    

main.innerHTML = cars;

