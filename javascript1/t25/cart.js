function getCartProducts(){
    let cart = JSON.parse(localStorage.getItem(`cart`));

    if(cart === null){
        return [];
    }else{
        return cart;
    }
}
function addtov(){
    let cart_table = document.getElementById(`cart_table`);
    let o = ``;

    getCartProducts().map( function(cart){
        o += `<tr>
        <th scope="row">1</th>
        <td>
            <img src="${cart.image}" class="cart-img">
        </td>
        <td>${cart.name}</td>
        <td>${cart.price}₴</td>
        <td class="text-center"><button class="btn btn-danger" onclick="removeProduct()">x</button></td>
      </tr>
      `
    })
    cart_table.innerHTML = o;
}
addtov()
function removeProduct(){

}