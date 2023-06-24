
let name = document.getElementById(`name_user`);

let usnam = prompt(`ЯК Вас звати?`)
let poshta = prompt(`Яка ваша електронна пошта?`)
let pass= prompt(`Введіть пароль.`)

if(pass == `1234`){
name.innerHTML = `<a href=""> ${usnam} </a>`;

let posht = document.getElementById(`privitanya`);
posht.innerHTML = `Вітаю ${usnam}! на вашу поштову скринюку <br> ${poshta} відправленно лист із підтвердженням.`;
}else{
    let posht = document.getElementById(`privitanya`);
    posht.innerHTML = `На ваш email - ${poshta} відправлено інструкцію для відновлення паролю`; 
}
console.log(name)