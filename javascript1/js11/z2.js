
let month = document.getElementById(`month`);
let days = ` `;
answ = prompt(`Календар для якого місяця вивести на екран?`);
let mon = document.getElementById(`mon`);
mon.innerText = `Календар для місяця ${answ}`
let m = 0;
if( answ == `січень` || answ == `березень` || answ == `травень` || answ == `липень` || answ == `серпень` || answ == `жовтень` || answ == `грудень`  ){  
    m = 32;
}else if(answ == `квітень` || answ == `червень` || answ == `вересень` || answ == `листопад` ){
    m = 31;
}else if(answ == `лютий`){
    m = 29;
}else{
    alert(`Такого місяця не існує`)
}
for(i = 1; i < m ; i++){
    if(i % 7 == 0 || (i+1) % 7 == 0){

    days += `<div class="day week">${i} <br> ${answ}</div>`;
    }else{
    days += `<div class="day">${i} <br> ${answ}</div>`;
    }
}
month.innerHTML = days;

