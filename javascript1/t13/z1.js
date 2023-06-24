let bal1 = 0;
let bal2 = 0;

let clava = {
    action: true,
    nam: "Клавіатура дротова <br> Logitech G209 Prodigy USB",
    vid: 204,
    price: 1399,
    photo: `<img src=2.jpg>`,
}
let clava1 = {
    action: true,
    nam: "Клавіатура дротова Cougar Vantar",
    vid: 6,
    price: 1286,
    photo: `<img src=2.jpg>`,
}
let products = document.getElementById(`products`)
let product = document.getElementById(`product1`)

let product1 = `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="2.jpg" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${clava.nam}
    </div>
    
    <div class="reviews">
        ${clava.vid} відгуки
    </div>
    
    <div class="price">
        ${clava.price}&#8372;
    </div>
</div>
</div>`;

let product2 = `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="3.jpg" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${clava1.nam}
    </div>
    
    <div class="reviews">
        ${clava1.vid} відгуків
    </div>
    
    <div class="price">
        ${clava1.price}&#8372;
    </div>
</div>
</div>`;
 

products.innerHTML =  product1 + product2;

if(clava.price < clava1.price){
    bal1 += clava1.price1 - clava.price;
}else{
    bal2 += clava.price - clava1.price
}

