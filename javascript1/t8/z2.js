let kilkist = 0;
let vsogo = 0;
let put = true;
while(put == true){ 
chu = Number(prompt('Введіть ціну'));
vsogo = vsogo + chu;
kilkist++;
put = confirm(`Хочете продовжити покупки?`)
}
console.log(`Загальна вартість придбаних Вами товарів становить - ${vsogo} грн. Кількість товарів - ${kilkist}. Середня ціна покупки - ${vsogo/kilkist}`)