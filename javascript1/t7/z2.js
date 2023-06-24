const chu = [3, 6, 9];
for(i = 1; i<=5; i++ ){
    let vved = prompt('Введіть 5 числ');
    let num = Number(vved)
    let y = chu.indexOf(num);



    if( y == -1){
        chu.push(num);
    }else {
        chu[y]="*";
    }
}
console.log(chu);
