let passw = 4856
let lich = 3;
for(i=1; i<=3; i++){
    let sproba = prompt(`Введіть пароль. У вас залишилось ${lich} спроб`)
    lich--;
 
    if(lich == 1){
        alert('Підсказка до паролю. Перша цифра - 4')
    }

    if(sproba == passw){
        alert('Пароль вірний.')
        break;
    } 
}