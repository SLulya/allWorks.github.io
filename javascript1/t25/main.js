function add(){
    let cards = document.getElementById(`cards`);
    let x = ``;
    phones.map( function(phone, index){
        x += `<div class="card">
        <img src="${phone.image}">
        <div class="card-body">
            <h6 class="card-title">${phone.name}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
                <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
                <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}₴</span></li>
            </ul>
        </div>
        <div class="card-body price">
            <a onclick="addToCart(${index})"  href="#" class="card-link">В корзину</a>
            <a href="#" class="card-link">Придбати</a>
          </div>
    </div>
`
    })
    cards.innerHTML = x;
}
add();

function addToCart(index){
    let cart = getCartProducts();
    cart.push(phones[index])
    localStorage.setItem(`cart`, JSON.stringify(cart));
    showProdsInCart()
}

function getCartProducts(){
    let cart = JSON.parse(localStorage.getItem(`cart`));

    if(cart === null){
        return [];
    }else{
        return cart;
    }
}
let y = getCartProducts();
console.log(y)

function showProdsInCart(){
    let prod_in_card = document.getElementById(`prod_in_card`);
    prod_in_card.innerHTML = getCartProducts().length;
}
 
