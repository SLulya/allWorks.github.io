const chu = [];
let num1 = prompt(`Гравець 1, введіть своє ім'я`)
let num2 = prompt(`Гравець 2, введіть своє ім'я`)

for(i = 1; i < 6; i++){
chu.push( prompt(` ${num1}, загадайте № число`) )
}


for ( i = 1; i < 7; i++) { 
    let answ = prompt(`${num2}, вгадайте число від 1 до 20`)

if ( chu.indexOf(answ) == -1 ) {
    alert('Ви програли');
} else{
    alert('Ви виграли');
    break;
}
}


console.log(chu)