function vhid(){ 
let user =  JSON.parse(localStorage.getItem(`users`));

let login = document.getElementById(`login`).value;
let pass = document.getElementById(`pass`).value;

if (login == user.login || login == user.email && pass == user.pass){
        alert(`Вхід успішний`)
}else{
    alert(`Неправильно введенні данні`)
}
}