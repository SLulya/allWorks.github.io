let chu = [];

for (i = 1; i < 11; i++) {
chu.push( prompt ('Введіть 10 чисел') )
}
let answ = prompt ('Вкажіть кількість чисел, яку потрібно видалити з масиву')

answ_chu = Number(answ)

for(i = 0; i < answ_chu; i++){
chu.pop();

}

console.log(chu)