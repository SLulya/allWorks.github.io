let chu = [1, 3, 5];
let chuu = chu.slice(); 
let answw = [];

for (i = 1; i < 6; i++) {
    answ_chu = prompt(`Введіть 5 чисел`);
    let answ = Number(answ_chu)
    if (chuu.indexOf(answ) == -1) {
        chuu.push(answ);
    } else {
        chuu[chuu.indexOf(answ)] = `*`;
        answw.push(answ);
    }
}
if (chuu.length <= 6){
    alert(`Перемога. Вгадано числа: ${answw}`)
}

console.log(chu)
console.log(chuu)