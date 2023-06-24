function add(cards_mass){
    let cards = document.getElementById(`cards`);
    let x = ``;


    cards_mass.map( function(phone){
        let y = ``;
        if(phone.action == true){ 
        y = `<div class="action">Акція</div>`
        }
        x += `<div class="card">
        ${y}
        <img src="${phone.image}" class="card-img-top">
        <div class="card-body">
            <h6 class="card-title">${phone.name}</h6>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><b>Виробник:</b> <span>${phone.developer}</span></li>
                <li class="list-group-item"><b>Відгуків:</b> <span>${phone.reviews}</span></li>
                <li class="list-group-item"><b>Ціна:</b> <span>${phone.price}₴</span></li>
            </ul>
        </div>
        <div class="card-body price">
            <a href="#" class="card-link">В корзину</a>
            <a href="#" class="card-link">Придбати</a>
          </div>
          </div>`
        }
    )
    cards.innerHTML = x;
   
}
add(phones);

function findDevelopers(){
    let datalistOptions = document.getElementById(`datalistOptions`);
    let developers = [];

    phones.map( function(phone){
        if(developers.indexOf(phone.developer) === -1){
            developers.push(phone.developer);
        }
    })
    let options = ``;
    developers.map ( function(dev){
        options += `<option value='${dev}'>`
    })
    
    datalistOptions.innerHTML = options; 

}
findDevelopers()

function saveFilter(){
    let info = {
        name: document.getElementById(`tovar`).value,
        developer: document.getElementById(`vur`).value,
        max_price: document.getElementById(`max`).value,
        min_price: document.getElementById(`min`).value,
        order: document.getElementById(`ved`).value

    }
    localStorage.setItem("infa",JSON.stringify(info));

    redrawCards(info)
}

function redrawCards(info){
    let new_phones = phones.slice();
    if(info.name.length > 0){
        new_phones = new_phones.filter(function (phone){
            return phone.name.includes(info.name)
        })
    }
    if(info.developer.length > 0){
        new_phones = new_phones.filter(function (phone){
            return phone.developer === info.developer 
        })
    }
    if(info.min_price.length > 0){
        new_phones = new_phones.filter(function (phone){
            return phone.price >= info.min_price 
        })
    }
    if(info.max_price.length > 0){
        new_phones = new_phones.filter(function (phone){
            return phone.price <= info.max_price 
        })
    }
    if(info.order.length > 0 && info.order === "price"){
        new_phones = new_phones.sort(function (a, b){
            return a.price - b.price 
        })
    }
    if(info.order.length > 0 && info.order === "reviews"){
        new_phones = new_phones.sort(function (a, b){
            return  b.reviews - a.reviews
        })
    }
    add(new_phones);
}
let object = JSON.parse(localStorage.getItem(`infa`));
if(object){
redrawCards(object);
}else{
    add(new_phones);
}


