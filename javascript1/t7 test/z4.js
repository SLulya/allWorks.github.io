const chu = [];

for (i = 1; i < 6; i++) {
    chu.push(prompt(`Введіть 5 чисел`));
}

for (i = 1; i < 4; i++){ 
let answ_chu = prompt (`Введіть число`);

if (chu.indexOf(answ_chu) == -1) {
    alert(`не правильно`)
} else{
    alert(`правильно`)
    break 
}
}