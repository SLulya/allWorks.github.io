const chu = [ 3, 5, 7, 12, 15];


for ( i = 1; i < 7; i++) { 
    let answ = prompt('Вгадайте число від 1 до 20')

let answ_chu = Number(answ);
if ( chu.indexOf(answ_chu) == -1 ) {
    alert('Ви програли');
} else{
    alert('Ви виграли');
    break;
}
}

